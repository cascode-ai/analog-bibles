# Golden Solution - G349

## Reference answer

$\overline{v_i^2}/\Delta f = 4kT\frac{2}{3g_m} + \frac{4kT}{g_m^2R_L} = 4kT(667 + 100)\ \Omega \approx 1.27\times10^{-17}$ V²/Hz (≈ 3.6 nV/√Hz; $1.11\times10^{-17}$ without the load term); $\overline{i_i^2} \approx 0$.

- Short-circuited input: drain noise $i_d$ is referred as $i_d/g_m$, giving $4kT(2/3)/g_m$; the 10-kΩ load adds $4kT/(g_m^2R_L)$ (gain 10).
- Open-circuited input: with no gate current and no $C_{gs}$, no output noise is produced by any input current path, so the equivalent input noise current is zero.

## Grading notes

+2: $\overline{v_i^2}$ ≈ $1.1$–$1.3\times10^{-17}$ V²/Hz (load term optional) and $\overline{i_i^2} = 0$ (or negligible, with the reason). +1: the right $\overline{v_i^2}$ with $\overline{i_i^2}$ not discussed, or a minor slip. 0: $\overline{v_i^2}$ computed with $4kT/g_m$ (no 2/3 factor) stated as a model choice, with $\overline{i_i^2} = 0$. −2 (asserted as fact): a nonzero shot-noise input current invented, $\overline{v_i^2}$ = $4kT\cdot g_m$, or $\overline{v_i^2}$ off by orders of magnitude.
