# Golden Solution - G193

## Reference answer

$\dfrac{i_o}{i_i} \approx \dfrac{\beta_0}{\beta_0 + 1}\cdot\dfrac{1}{1 + s\dfrac{C_\pi r_\pi}{\beta_0 + 1}} \approx \dfrac{\alpha_0}{1 + sC_\pi/g_m}$, with $\alpha_0 = 0.990$ and a pole at $(g_m + 1/r_\pi)/C_\pi = 1.94\times10^9$ rad/s. The −3-dB frequency is ≈ 309 MHz (≈ 306 MHz with $g_m/C_\pi$).

- $g_m = 0.5/26 = 19.2$ mA/V, $r_\pi = \beta/g_m = 5.2\ \mathrm{k\Omega}$.
- KCL at the emitter: $i_i = -v_1(g_m + 1/z_\pi)$ with $z_\pi = r_\pi\|(1/sC_\pi)$; this does not involve $r_b$ because all of the current in $z_\pi$ must return through the base. The collector current from the controlled source is $g_mv_1$, giving the expression above.
- With $R_L = 0$, $C_\mu$ does not form the usual output pole ($-1/R_LC_\mu \to \infty$). A refinement: if the current that flows from the internal base through $C_\mu$ into the collector short is included (base impedance $r_b\|1/sC_\mu$), the collector-terminal current has a −3-dB frequency of ≈ 257 MHz instead; the simple model above is the usual answer.

## Grading notes

+2: low-frequency gain $\alpha_0 \approx 0.99$ and a single pole at ≈ $g_m/C_\pi$, giving $f_{-3\text{dB}}$ ≈ 300–310 MHz; an answer of ≈ 250–260 MHz from a full model that includes the $r_b$–$C_\mu$ path into the collector is also +2 if derived. +1: correct form with a numerical slip (e.g., forgetting 2π but stating rad/s correctly elsewhere), or $f_{-3\text{dB}}$ correct with the gain taken as exactly 1 without comment. 0: correct expression without the −3-dB frequency, or a frequency within 2× from a partly wrong model. −2 (asserted as fact): a Miller-multiplied $C_\mu$ dominating the response, a −3-dB frequency at $f_\beta = f_T/\beta$ (≈ 3 MHz) or at $1/(2\pi r_bC_\mu)$, or a current gain of β.
