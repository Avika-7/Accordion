import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }

  function handleMultiSelection(getCurrentID) {
    let copyMultiple = [...multiple];

    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentID);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentID);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
          Frequently Asked Questions
        </h1>

        {/* Multi Selection Button */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => {
              setEnableMultiSelection(!enableMultiSelection);
              setMultiple([]);
              setSelected(null);
            }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              enableMultiSelection
                ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"
            }`}
          >
            {enableMultiSelection
              ? "Disable Multi Selection"
              : "Enable Multi Selection"}
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {data && data.length > 0 ? (
            data.map((dataItem) => {
              const isOpen =
                selected === dataItem.id || multiple.includes(dataItem.id);

              return (
                <div
                  key={dataItem.id}
                  className="overflow-hidden rounded-lg border border-blue-200
                bg-white shadow-sm"
                >
                  {/* Question */}
                  <div
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                    className="flex cursor-pointer items-center justify-between px-5 py-4 transition-colors hover:bg-blue-50"
                  >
                    <h2 className="text-base font-semibold text-slate-700">
                      {dataItem.question}
                    </h2>

                    <span
                      className={`ml-4 text-2xl font-light text-blue-500 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>

                  {/* Answer */}
                  {isOpen && (
                    <div className="border-t border-blue-100 bg-blue-50/50 px-5 py-4">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {dataItem.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-slate-500">No data found!</p>
          )}
        </div>
      </div>
    </div>
  );
}
