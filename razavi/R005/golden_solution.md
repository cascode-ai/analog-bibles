# Golden Solution - R005

## Reference answer

Reverse body bias (more negative $V_{BS}$) shifts the curve to the right through the body effect: $V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 - V_{BS}} - \sqrt{0.9}\right)$ V, giving $V_{TH}$ ≈ 0.70, 0.89, 1.04, 1.16 V for $V_{BS}$ = 0, −1, −2, −3 V.
- Each curve is zero up to its own $V_{TH}(V_{BS})$ (first break point), then follows the same square-law parabola $\tfrac12\mu_nC_{ox}(W/L)(V_{GS}-V_{TH})^2$, only shifted by $\Delta V_{TH}$ (the shape and the factor $\mu_nC_{ox}W/L$ do not change).
- For the fixed $V_{DS}$, each curve has a second break point at $V_{GS} = V_{TH}(V_{BS}) + V_{DS}$, above which it is a straight triode line; with large $V_{DS}$ this lies off the plot and all curves stay saturated.
- Equal steps of $V_{BS}$ give shrinking shifts (square-root dependence). Positive $V_{BS}$ lowers $V_{TH}$ a little, but only up to a few hundred mV before the source–bulk junction conducts.

## Grading notes

+2: curves shift right as $V_{BS}$ becomes more negative, break points at $V_{TH}(V_{BS})$ with approximately correct values (±0.03 V) or an explicit statement of the sub-linear (square-root) spacing, and the triode break at $V_{TH}(V_{BS}) + V_{DS}$ if a finite $V_{DS}$ is considered. A notational slip that the answer's own values contradict (e.g., $V_{TH}(V_{DS})$ written for $V_{TH}(V_{BS})$ in one formula while the tabulated break points are right) is trivial and does not cost a point. +1: correct right shift and break points without values and without the sub-linear spacing. 0: shift direction right but break points not identified. -2 (asserted as fact): left shift for reverse bias, body effect changing the slope/gain factor instead of $V_{TH}$, or wrong $V_{TH}$ formula giving clearly wrong values.
