# Golden Solution - R340

## Reference answer

With $K_2 \equiv R_S + R_F + g_{m1}R_FR_S$:
$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1+g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right]}{\left(g_{m1}R_F + g_{m2}K_2\right)^2}$$

- $M_2$'s drain current into the output is $-g_{m2}V_{in} + I_{n2}$ (PMOS, source at $V_{DD}$). As in a current-source-loaded stage, the net current through $M_1$ and $R_F$ equals this current and flows through $R_S$: $V_S = R_S(I_{n2} - g_{m2}V_{in}) + V_{n,RS}$.
- $V_{out} = -g_{m1}R_FV_{in} + (1+g_{m1}R_F)V_S + R_F(I_{n2} - g_{m2}V_{in} - I_{n1} - I_{n,RF})$.
- Signal gain: $-(g_{m1}R_F + g_{m2}K_2)$ ($M_2$ now adds signal current too). Noise coefficients: $I_{n1}, I_{n,RF}$: $-R_F$; $V_{n,RS}$: $1+g_{m1}R_F$; $I_{n2}$: $K_2$. Dividing by the gain gives the result.
- Check: $g_{m2} \to 0$ removes the $M_2$ terms and gives the single-transistor result $4kT[\gamma/g_{m1} + 1/(g_{m1}^2R_F) + R_S(1+g_{m1}R_F)^2/(g_{m1}R_F)^2]$.

## Grading notes

+2: expression equivalent to the reference, with the enlarged gain $g_{m1}R_F + g_{m2}(R_S + R_F + g_{m1}R_FR_S)$ (i.e., $M_2$ also amplifies the input). +1: correct structure with a slip in one coefficient. 0: correct output noise but the gain taken as $g_{m1}R_F$ (missing $M_2$'s signal contribution), stated with the rest of the analysis sound. -2 (asserted as fact): $M_2$'s gate treated as a fixed bias (noise referred as if it were a current source), a topology misreading such as $R_F$ to ground, or dimensionally wrong terms.
