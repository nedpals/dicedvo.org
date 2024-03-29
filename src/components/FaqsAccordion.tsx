import { Disclosure } from "@headlessui/react";
import type { FAQ } from "../data/faqs";

import ArrowDownIcon from "~icons/dice/arrow-down";
import { cn } from "../utilities";
import { useEffect, useRef, useState } from "react";

export default function FaqsAccordion({ questions }: {
    questions: FAQ[]
}) {
    const [currentOpenedIdx, setCurrentOpenedIdx] = useState(-1);
    const prevCurrentOpenedIdx = useRef(currentOpenedIdx);
    const questionCloseEls = useRef<Record<number, () => void>>({});

    useEffect(() => {
        if (prevCurrentOpenedIdx.current !== -1) {
            questionCloseEls.current[prevCurrentOpenedIdx.current]();
        }

        prevCurrentOpenedIdx.current = currentOpenedIdx;
    }, [currentOpenedIdx]);

    return (
        <div>
            {questions.map((q, i) => (
                <Disclosure
                    as="div"
                    key={`question_${i}`}
                    className="transition-colors border-b hover:bg-gray-200 border-gray-400">
                    {({ open, close }) => (<>
                        <Disclosure.Button
                            ref={_ => questionCloseEls.current[i] = close}
                            onClick={() => {
                                setCurrentOpenedIdx(cIdx => i === cIdx ? -1 : i);
                            }}
                            className="w-full py-4 px-8 flex items-center text-left justify-between">
                            <p className="flex-1 font-bold">{q.question}</p>
                            <ArrowDownIcon className={cn("ml-4", open && 'rotate-180')} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pb-4 px-8">
                            <p>{q.answer}</p>
                        </Disclosure.Panel>
                    </>)}
                </Disclosure>
            ))}
        </div>
    )
}
