# Golden Solution - R283

## Reference answer

$\omega_{corner} = \dfrac{1 + (g_{m1}+g_{m2})(r_{O1}\|r_{O2})}{(R_F + r_{O1}\|r_{O2})\,C_{in}}$, i.e., $f_{corner} = \dfrac{1 + A_0}{2\pi(R_F + r_{O1}\|r_{O2})C_{in}} \approx \dfrac{1+A_0}{2\pi R_FC_{in}}$ for $R_F \gg r_{O1}\|r_{O2}$, with $A_0 = (g_{m1}+g_{m2})(r_{O1}\|r_{O2})$.

- With $C_1$ shorted, $M_2$'s source is at ac ground, so the stage is a complementary CS amplifier from X to $V_{out}$ with transconductance $g_{m1}+g_{m2}$ and output resistance $r_{O1}\|r_{O2}$, and $R_F$ feeds back from output to X.
- Resistance seen by $C_{in}$ at X: apply $v_X$, current $i_X$ through $R_F$: $i_X = (v_X - v_{out})/R_F$ and $i_X = (g_{m1}+g_{m2})v_X + v_{out}/(r_{O1}\|r_{O2})$ → $R_X = \dfrac{R_F + r_{O1}\|r_{O2}}{1 + (g_{m1}+g_{m2})(r_{O1}\|r_{O2})}$ (Miller reduction of $R_F$).
- $C_{in}$ and $R_X$ form a high-pass filter: corner at $1/(R_XC_{in})$; $V_{out}/V_X$ is frequency independent, so the same corner applies to $V_{out}/V_{in}$.

## Grading notes

+2: corner at $1/(R_XC_{in})$ with $R_X = (R_F + r_{O1}\|r_{O2})/[1 + (g_{m1}+g_{m2})(r_{O1}\|r_{O2})]$ or the approximation $(1+A_0)/(R_FC_{in})$ (in rad/s or divided by 2π, consistently). +1: Miller idea right but $g_{m2}$ omitted (or only $g_{m1}$ used) or the $r_O$ term in the numerator dropped without stating $R_F \gg r_O$. 0: corner given as $1/(R_FC_{in})$ with a remark that the amplifier modifies it, but no expression. -2 (asserted as fact): corner $= 1/(R_FC_{in})$ as the final answer, $C_{in}$ Miller-multiplied as if it were a feedback capacitor, or the gain applied as a divisor to the frequency.
