# Golden Solution - A122

## Reference answer

$V_{GG} \approx 2.05$ V.

$100\ \mu\mathrm{A} = \frac{110\ \mu\mathrm{A/V^2} \cdot 1}{2}(V_{GG} - 0.7)^2$, so $V_{GG} - 0.7 = \sqrt{1.818} = 1.348$ V and $V_{GG} = 2.048$ V.

## Grading notes

+2: $V_{GG}$ = 2.03–2.07 V (a small shift from including $1+\lambda v_{DS}$ with a stated $v_{DS}$ is fine). +1: the right method with a rounding slip. 0: a correct expression without a number. −2 (asserted as fact): p-channel parameters or M1's W/L used for M2 (e.g. 1.30 V or 2.7 V), or the factor 1/2 missing (1.65 V).
