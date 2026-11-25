# Golden Solution - R029

## Reference answer

$M_1$ (gate at 2 V) transfers charge from $C_1$ to $C_2$. Use the long-channel square-law model with $\lambda=0$. The initial current is

$$I_X(0^+)=\tfrac12\beta(2-0.7)^2=(0.845\ \mathrm{V^2})\beta,$$

and $I_X$ decreases to zero while $V_X$ falls and $V_S$ rises. Charge conservation gives $C_1(3-V_X)=C_2V_S$.

- Case 1, $C_2/C_1<r_{\mathrm{crit}}\approx1.748$: $M_1$ stays saturated and turns off as $V_S\to V_{S,\mathrm{off}}\approx1.092$ V. Final $V_X=3-1.092(C_2/C_1)$ V; the limiting threshold condition is $V_{GS}=V_{TH}$.
- Case 2, $C_2/C_1>r_{\mathrm{crit}}$: $V_X$ reaches $V_S$ first, $M_1$ enters triode, and both nodes settle at $V_f=3C_1/(C_1+C_2)$.

At $C_2/C_1=r_{\mathrm{crit}}$, cut-off and node equalization coincide at $V_X=V_S=V_{S,\mathrm{off}}$. The normalized figures use $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1$ pF.

## Answer figures

![V_X versus time](/q/R029/solution-vx.svg)

![I_X versus time](/q/R029/solution-ix.svg)

The curves use the stated MOS model with $\lambda=0$ and show $V_X$ in volts and $I_X$ in milliamperes.

## Grading notes

+2: charge transfer from $C_1$ to $C_2$ through $M_1$, initial $I_X=\tfrac12\beta(1.3\ \mathrm{V})^2$, $V_X$ falling and $V_S$ rising, and a correct stopping mechanism with charge-consistent final voltages.

+1: correct mechanism and final-value logic but no explicit charge-conservation expression.

0: final value wrong through an arithmetic slip, but the mechanism is right.

-2 (asserted as fact): $V_X$ discharged to 0 V, $C_2$ ignored (source treated as grounded), or $I_X$ increasing.
