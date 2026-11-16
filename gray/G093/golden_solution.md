# Golden Solution - G093

## Reference answer

$R \approx 90$ kΩ (89.8 kΩ); minimum $W/L = 10$.

- KVL: $V_{GS2} = V_{GS1} - I_{IN}R$. With identical devices in weak inversion, $I_{OUT} = I_{IN}\exp\!\left(-\dfrac{I_{IN}R}{nV_T}\right)$.
- $R = \dfrac{nV_T}{I_{IN}}\ln\dfrac{I_{IN}}{I_{OUT}} = \dfrac{1.5\times26\ \mathrm{mV}}{1\ \mu\mathrm{A}}\ln10 = 89.8$ kΩ.
- Weak inversion needs $V_{GS} - V_t = nV_T\ln[I_D/((W/L)I_t)] < 0$, i.e. $W/L > I_D/I_t$: $M_1$ (1 µA) needs $W/L > 10$, $M_2$ (0.1 µA) needs $W/L > 1$. Since the transistors are identical, $W/L \ge 10$.

## Grading notes

+2: $R$ in 88–91 kΩ and minimum $W/L$ = 10 (set by $M_1$). +1: $R$ right and $W/L$ right but with a sloppy argument, or a small slip. 0: $R$ right but minimum $W/L$ given as 1 (only $M_2$ considered) or missing. -2 (asserted as fact): strong-inversion square law used, $R$ off by the factor $n$ or with $\log_{10}$, or the exponential sign reversed so that $I_{OUT} > I_{IN}$.
