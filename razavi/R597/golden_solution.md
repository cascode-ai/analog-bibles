# Golden Solution - R597

## Reference answer

$$\varepsilon = \left(\frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2}\right)^2 \approx \left(\frac{1 + C_1/C_2}{G_mR_{out}}\right)^2,\qquad \frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}(1 - \varepsilon).$$
This is the square of the error of the main amplifier alone. The auxiliary amplifier reproduces the main amplifier's virtual-ground error, and the error amplifier cancels it to first order.

Derivation (settled values, so capacitor currents are zero; $A = G_mR_{out}$, $D = C_1 + C_2 + AC_2$):
- Auxiliary: $V_Z = -AV_X$; charge balance at X, $C_1(V_{in} - V_X) = C_2(V_X - V_Z)$, gives $V_X = C_1V_{in}/D$.
- Main: Y receives $-G_mV_M$ from the main amplifier and $-G_mV_X$ from the error amplifier, so $V_Y = -A(V_M + V_X)$. Charge balance at the main input, $C_1(V_{in} - V_M) = C_2(V_M - V_Y)$, gives $V_M = (C_1V_{in} - AC_2V_X)/D = C_1V_{in}(C_1 + C_2)/D^2$.
- $V_Y = -A(V_M + V_X) = -(C_1/C_2)V_{in}[1 - ((C_1 + C_2)/D)^2]$.

## Grading notes

+2: ε = $[(C_1 + C_2)/(C_1 + C_2 + G_mR_{out}C_2)]^2$ or the approximate $[(C_1 + C_2)/(G_mR_{out}C_2)]^2$, recognized as second order in $1/(G_mR_{out})$ (the square of the uncorrected error). +1: the correct conclusion that the error is second order, with a coefficient error. 0: correct node equations not solved. -2 (asserted as fact): zero gain error (perfect cancellation), a first-order error $(C_1 + C_2)/(G_mR_{out}C_2)$ for the complete circuit, or the error-amplifier current added with the wrong sign, which doubles the error.
