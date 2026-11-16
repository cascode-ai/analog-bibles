# Golden Solution - G029

## Reference answer

$g_m \approx 0.256$ µA/V (2.56×10⁻⁷ S); $f_T \approx 4.1$ MHz.

- In weak inversion $I_D = \tfrac{W}{L}I_t\exp\!\big(\tfrac{V_{GS}-V_t}{nV_T}\big)\big(1 - e^{-V_{DS}/V_T}\big)$; with $V_{DS} = 1$ V ≫ $V_T$ the last factor is 1, so $g_m = I_D/(nV_T) = 10\ \mathrm{nA}/(1.5\times26\ \mathrm{mV}) = 0.256\ \mu$A/V.
- $f_T = \dfrac{g_m}{2\pi(C_{gs}+C_{gd}+C_{gb})} = \dfrac{2.56\times10^{-7}}{2\pi\times10^{-14}} = 4.08$ MHz.

## Grading notes

+2: $g_m$ in 0.25–0.26 µA/V and $f_T$ in 4.0–4.2 MHz. +1: both final values right, with only a slip that does not change them (e.g. a wrong power of ten in an intermediate line), or a final value just outside its range from rounding (e.g. $f_T$ = 4.3 MHz). 0: right formulas but a final value wrong by a computational slip (e.g. 2π dropped, 25.6 MHz, or a power-of-ten error such as $f_T$ = 4.1 GHz), whether it affects $f_T$ alone or both values. -2 (asserted as fact): $g_m = I_D/V_T$ ignoring $n$ (0.385 µA/V, 6.1 MHz), a square-law formula used in weak inversion, or $g_m = nI_D/V_T$.
