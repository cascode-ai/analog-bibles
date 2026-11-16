# Golden Solution - R007

## Reference answer

$I_X$ is negative for $V_X < 1$ V (the $V_X$ terminal acts as the source, triode), crosses zero at $V_X = 1$ V, and for $V_X > 1$ V is essentially zero because, with body effect, $M_1$ is only at the edge of conduction.
- $0 \le V_X < 1$ V: the $V_X$ node is the source ($V_{GS} = 1.9 - V_X$, $V_{SB} = V_X$, $V_{DS} = 1 - V_X$). Since $V_{TH}(V_X) < 0.9$ V, $V_{DS} < V_{GS} - V_{TH}$ and $M_1$ is in triode throughout. Current flows from the 1-V source into the $V_X$ source: $I_X = -\beta[(1.9 - V_X - V_{TH})(1 - V_X) - (1 - V_X)^2/2]$: −0.70β at $V_X = 0$, −0.39β at 0.25 V, −0.17β at 0.5 V, −0.044β at 0.75 V, 0 at 1 V. $g_m = \beta V_{DS} = \beta(1 - V_X)$, falling linearly from β·(1 V) to 0.
- $V_X > 1$ V: the 1-V node is the source, $V_{GS} = 0.9$ V, $V_{SB} = 1$ V, $V_{TH} = 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) = 0.893$ V, overdrive only ≈ 7 mV. $M_1$ saturates within a few mV of 1 V and carries $I_X \approx \tfrac12\beta(0.0066)^2 \approx 2\times10^{-5}\beta$, i.e. practically zero (in reality a small subthreshold current), constant up to 3 V; $g_m \approx 0$.
- For comparison, without body effect $M_1$ would saturate at $V_X$ = 1.2 V with $I_X = 0.02\beta$ and $g_m = 0.2\beta$.

## Grading notes

+2: source/drain role swap recognized (negative $I_X$ in triode for $V_X < 1$ V, ≈ −0.7β at $V_X = 0$), zero crossing at 1 V, and for $V_X > 1$ V the body effect raising $V_{TH}$ to ≈ 0.89 V so that $M_1$ is barely on and $I_X \approx 0$; $g_m \approx \beta(1 - V_X)$ then ≈ 0. +1: same analysis but neglecting the body effect (plateau $0.02\beta$ above 1.2 V), or correct description without numbers. 0: misses the negative-current region (says $I_X = 0$ for $V_X < 1$ V) while the $V_X > 1$ V part is right. -2 (asserted as fact): positive $I_X$ for $V_X < 1$ V, a large saturated current for $V_X > 1$ V, or the 1-V node treated as the source for all $V_X$.
