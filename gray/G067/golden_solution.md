# Golden Solution - G067

## Reference answer

$R_i = r_{\pi1} \approx 20.8$ kΩ; $G_m \approx g_{m1} = 9.6$ mA/V; $R_o \approx 100.5$ MΩ ($\approx \beta_0 r_{o2} = 104$ MΩ); $A_v = -G_m R_o \approx -9.7\times10^5$ ($\approx -\beta_0 V_A/V_T = -1.0\times10^6$).

- $g_m = 250\ \mu/26\ \mathrm{m} = 9.62$ mA/V, $r_\pi = 200/g_m = 20.8$ kΩ, $r_o = 130/250\ \mu = 520$ kΩ for both transistors.
- $R_i = r_{\pi1}$ (base of $Q_1$).
- $G_m$: $Q_1$'s collector current enters the low-impedance emitter of $Q_2$ and is passed on with current gain $\approx \alpha_0$, so $G_m \approx g_{m1}$ (more exactly $g_{m1}\alpha_0 r_{o1}/(r_{o1} + r_{e2}) \approx 9.57$ mA/V).
- $R_o = r_{o2}\left[1 + \dfrac{g_{m2} r_{o1}}{1 + g_{m2} r_{o1}/\beta_0}\right] = 520\ \mathrm{k}\,[1 + 5000/26] = 100.5$ MΩ ($Q_1$'s $r_{o1}$ acts as emitter degeneration of $Q_2$; since $g_{m2}r_{o1} \gg \beta_0$ the result approaches $\beta_0 r_{o2}$).
- $A_v = -G_m R_o = -9.62\ \mathrm{mA/V} \times 100.5\ \mathrm{M\Omega} \approx -9.7\times10^5$; with $R_o \approx \beta_0 r_{o2}$, $A_v \approx -g_{m1}\beta_0 r_{o2} = -\beta_0/\eta$, $\eta = V_T/V_A = 2\times10^{-4}$.

## Grading notes

+2: $R_i \approx 20.8$ kΩ, $G_m \approx 9.6$ mA/V, $R_o$ between 100 and 105 MΩ (exact or $\beta_0 r_{o2}$ approximation), $|A_v|$ between $9.5\times10^5$ and $1.01\times10^6$, negative (inverting). +1: one quantity off by a slip, or $(\beta_0+1) r_{o2}$-type variants. 0: input resistance and transconductance right but $R_o$ wrong by a missing step. −2 (asserted as fact): $R_o \approx g_{m2} r_{o2} r_{o1}$ (≈ 2.6 GΩ, the MOS-cascode result that ignores finite $\beta_0$), $R_o = r_{o2}$, or $G_m$ reduced by a large factor.
