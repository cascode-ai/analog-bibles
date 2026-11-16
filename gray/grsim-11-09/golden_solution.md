# Golden Solution - grsim-11-09

## Reference answer

Low frequency: $\overline{v_i^2}/\Delta f \approx 4kT(800\ \Omega) \approx 1.3\times10^{-17}$ V²/Hz (≈ 3.6 nV/√Hz); $\overline{i_i^2} \approx 0$. With the capacitances added, $\overline{v_i^2}$ stays flat up to about 1 GHz and doubles at roughly 8 GHz (≈ 8.3 GHz in a hybrid-π model with these values); there the equivalent input noise current is of order $4\times10^{-22}$ A²/Hz (≈ 20 pA/√Hz).

- DC: $V_{BE1} = 0.026\ln(10^{-3}/10^{-16}) = 0.778$ V, $V_{E1} = 1.01\text{ mA}\times100 = 0.101$ V, $V_{B1} = 0.879$ V, $I_{R1} = 2.93$ mA, $I_{D1} = 2.94$ mA, $g_{m,M1} = \sqrt{2\cdot60\ \mu\cdot100\cdot2.94\text{ m}} = 5.94$ mS ($V_{ov} = 0.99$ V, $V_i \approx 2.57$ V).
- Referred to the gate: $M_1$ $4kT\frac{2}{3g_m} = 4kT(112\ \Omega)$; $R_1$ noise current $4kT/R_1$ referred by $1/g_m$: $4kT(94\ \Omega)$.
- $Q_1$ stage noise (at its base: $r_b$, $R_2$, $1/2g_m$, base-current noise in $R_2$ + follower output resistance 108 Ω + $r_b$, $R_3$) is divided by the follower's open-circuit gain squared, $[g_mR_1/(1+g_mR_1)]^2 = 0.64^2 = 0.41$: $r_b$ 244, $R_2$ 244, $i_c$ 40, $i_b$ 45, $R_3$ 20 Ω.
- Sum ≈ $4kT(799\ \Omega) = 1.33\times10^{-17}$ V²/Hz; the gain $v_o/v_i \approx 9.9$. Input current noise is zero without gate current or capacitance.
- With capacitances ($C_\pi = g_m/2\pi f_T - C_\mu \approx 0.56$ pF): the referred collector shot noise grows as the stage gain falls near $f_T$; a numerical small-signal evaluation gives $\overline{v_i^2} = 2\times$ at ≈ 8.3 GHz, and $\overline{i_i^2} \approx 4.2\times10^{-22}$ A²/Hz there (mainly collector noise referred through the input capacitances).

## Grading notes

A correct answer gives a low-frequency $\overline{v_i^2}$ of $4kT(700$–$900\ \Omega)$ ≈ $1.2$–$1.5\times10^{-17}$ V²/Hz with $\overline{i_i^2} \approx 0$, a simulation confirming it within ±15%, and a simulated doubling frequency in the several-GHz range (≈ 5–12 GHz, close to $f_T$) with an input noise current density there of order $10^{-22}$–$10^{-21}$ A²/Hz. The high-frequency numbers depend on how the simulator implements $f_T$ (TF and junction capacitances), so a factor-of-1.5 spread is acceptable. +2: hand and simulated results consistent and in these ranges. +1: low-frequency part right, high-frequency part missing or poorly set up. 0: low-frequency value off by more than 30% with an identifiable modeling slip. −2: nonzero low-frequency input current noise asserted from shot noise in the MOS gate, the follower gain ignored (noise of $Q_1$ not divided by ≈ 0.41), or a doubling frequency far below 1 GHz asserted without justification.
