# Detailed solution - G147

With $V_{in}=0$, the only excitation is the pair of equal bias currents $I_B$ flowing into the two op-amp inputs. Each current develops a voltage across the resistance seen from its input. Require $V_{out}=0$, find the voltage this forces at the inverting input, and choose $R_x$ so that the noninverting input sits at the same voltage, as the ideal (infinite-gain) op amp demands.

### Step 1 — Noninverting input

$I_B$ flows from ground up through $R_x$ into the $+$ input, so

$$
V_+=-I_BR_x .
$$

### Step 2 — Inverting input with $V_{out}=0$

With $V_{in}=0$ and the desired $V_{out}=0$, both $R_1$ and $R_2$ return to 0 V. KCL at the $-$ input: the currents arriving through the two resistors supply $I_B$,

$$
\frac{0-V_-}{R_1}+\frac{0-V_-}{R_2}=I_B\ \Rightarrow\ V_-=-I_B\frac{R_1R_2}{R_1+R_2}=-I_B\left(R_1\parallel R_2\right).
$$

### Step 3 — Condition for zero output

The op amp with negative feedback forces $V_-=V_+$, so $V_{out}=0$ is consistent only if

$$
-I_BR_x=-I_B\left(R_1\parallel R_2\right)\ \Rightarrow\ R_x=R_1\parallel R_2=\frac{R_1R_2}{R_1+R_2}.
$$

Both inputs then see the same dc source resistance, so equal bias currents produce equal voltage drops that cancel as a common-mode signal; the result does not depend on the value or sign of $I_B$. For comparison, with $R_x=0$ the inverting input must stay at 0 V, the whole $I_B$ flows through $R_2$ (none through $R_1$), and $V_{out}=I_BR_2$.
