# Golden Solution - R673

## Reference answer

- Strong inversion: $g_m/I_D = \dfrac{2}{V_{GS}-V_{TH}} = \sqrt{\dfrac{2\mu C_{ox}(W/L)}{I_D}}$, falling as $1/\sqrt{I_D}$.
- Subthreshold: $g_m/I_D = \dfrac{1}{\zeta V_T}$, constant: ≈ 26 V⁻¹ for ζ = 1.5 at 300 K, and at most $1/V_T$ ≈ 39 V⁻¹.
- They are equal when $V_{GS}-V_{TH} = 2\zeta V_T$, i.e. at $I_D = \tfrac12\mu C_{ox}\frac{W}{L}(2\zeta V_T)^2 = 2\mu C_{ox}\dfrac{W}{L}(\zeta V_T)^2$.
- Example: NMOS with $\mu_nC_{ox}$ = 134 μA/V², ζ = 1.5, T = 300 K gives an overdrive ≈ 78 mV and $I_D$ ≈ 0.40 μA × (W/L); with ζ = 1, 0.18 μA × (W/L).
- Remark: below this current the square law would predict a $g_m/I_D$ larger than the subthreshold value, which is not physical. The real $g_m/I_D$ levels off at $1/(\zeta V_T)$ in weak inversion. The crossing therefore marks, roughly, the moderate-inversion boundary. The highest $g_m$ per unit current is obtained in subthreshold, at the cost of a large W/L (capacitance) and low speed.

## Grading notes

- +2: $2/(V_{GS}-V_{TH})$ (or $\sqrt{2\mu C_{ox}(W/L)/I_D}$); $1/(\zeta V_T)$; and the crossing $I_D = 2\mu C_{ox}(W/L)(\zeta V_T)^2$, equivalently $V_{GS}-V_{TH} = 2\zeta V_T$. Using n instead of ζ is fine.
- +1: expressions right but the crossing given only as the overdrive condition, or ζ set to 1 without saying so.
- 0: expressions right, but the crossing wrong by an algebra slip.
- -2 (asserted as fact): strong-inversion $g_m/I_D = 1/(V_{GS}-V_{TH})$ or $\propto\sqrt{I_D}$; a subthreshold $g_m/I_D$ that depends on $I_D$; or a crossing derived from such errors.
