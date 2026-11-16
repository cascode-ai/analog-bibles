# Golden Solution - A167

## Reference answer

The three transistors are in series, so $i_{D1} = i_{D2} = i_{D3} = I$ with $I = \frac{\beta_3}{2}(V_{DD}-V_{GG3}-|V_{T3}|)^2$ fixed by the saturated M3.

- M1 (gate at $V_{DD}$, deep nonsaturation): $I \cong \beta_1(V_{DD}-V_{T1})v_{DS1}$ → $v_{DS1} = \dfrac{I}{\beta_1(V_{DD}-V_{T1})}$.
- M2: its gate–source voltage is $V_{GG2} - v_{DS1}$ and its drain–source voltage $v_{DS2} = v_{OUT} - v_{DS1}$. With $V_{GG2} - V_{T2} \gg v_{DS1}$ the linearized current is $I \cong \beta_2(V_{GG2}-V_{T2})v_{DS2}$ → $v_{DS2} = \dfrac{I}{\beta_2(V_{GG2}-V_{T2})}$.
- Adding: $v_{OUT}(\min) = v_{DS1} + v_{DS2} = I\left[\dfrac{1}{\beta_1(V_{DD}-V_{T1})} + \dfrac{1}{\beta_2(V_{GG2}-V_{T2})}\right]$.
- With $\beta_1 = \beta_2$ and the value of $I$: $v_{OUT}(\min) = \dfrac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\dfrac{1}{V_{GG2}-V_{T2}} + \dfrac{1}{V_{DD}-V_{T1}}\right)$.

Interpretation: M1 and M2 act as two series channel resistances $1/[\beta(V_{GS}-V_T)]$ carrying the current set by M3.

## Grading notes

+2: equal currents set by M3, $v_{DS1} = I/[\beta_1(V_{DD}-V_{T1})]$, $v_{DS2} = I/[\beta_2(V_{GG2}-V_{T2})]$, sum, and substitution reaching the stated expression (with $\beta_1 = \beta_2$ used to put $\beta_2$ in the prefactor). +1: correct chain with a small algebra slip or the role of $\beta_1 = \beta_2$ left implicit. 0: only one of the two drain–source voltages derived. −2 (asserted as fact): M1 or M2 treated as saturated, $v_{OUT}$ taken as $v_{DS2}$ alone, or an algebraically different final result claimed to equal the target.
