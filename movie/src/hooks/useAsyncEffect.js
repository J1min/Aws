import React, { useEffect } from "react";

export default function useAsyncEffect(asyncEffect, deps) {
    useEffect(() => {
        const boxedCleanupOrNoop = asyncEffect(); // 클린업 할게 있으면 ?

        return () => {
            boxedCleanupOrNoop.then((cleanupOrNoop) => {
                typeof cleanupOrNoop === "function" && cleanupOrNoop();
            });
        };
    }, deps);
}
