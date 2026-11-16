# Golden Solution - R517

## Reference answer

$g_m = (3I_D)^{2/3}\beta^{1/3} = \sqrt[3]{9\beta I_D^2} \approx 2.08\,\beta^{1/3}I_D^{2/3}$, and $g_m = \dfrac{3I_D}{V_{GS} - V_{TH}}$.

- Integrating $g_m$: $I_D = \beta(V_{GS}-V_{TH})^3/3$, so $V_{GS}-V_{TH} = (3I_D/\beta)^{1/3}$.
- Substituting into $g_m = \beta(V_{GS}-V_{TH})^2$ gives $g_m = \beta(3I_D/\beta)^{2/3} = (3I_D)^{2/3}\beta^{1/3}$.
- Dividing: $g_m/I_D = 3/(V_{GS}-V_{TH})$, so $g_m = 3I_D/(V_{GS}-V_{TH})$. These replace the square-law forms $\sqrt{2\mu C_{ox}(W/L)I_D}$ and $2I_D/(V_{GS}-V_{TH})$.

## Grading notes

+2: both expressions correct (equivalent forms accepted). +1: both correct in form with a coefficient slip in one (e.g., $3^{1/3}$ instead of $3^{2/3}$). 0: only one of the two correct. -2 (asserted as fact): the square-law forms ($\sqrt{2\beta I_D}$, $2I_D/(V_{GS}-V_{TH})$) given for this device, or $g_m \propto I_D^{1/3}$ or $\propto I_D^{1/2}$.
