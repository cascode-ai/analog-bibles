# Detailed solution - A394

Here $v_{IN}$ drives the inverting input, and the noninverting input is a resistive mix of the output and $V_{REF}$. The comparator switches when $v_{IN}$ crosses that voltage, which takes two values according to the output state. Writing both trip points and matching them to the specifications gives $R_2$ and $V_{REF}$.

### Step 1 — Noninverting input voltage

With no comparator input current, superposition through $R_1$ and $R_2$ gives

$$
v_+=\frac{R_1}{R_1+R_2}v_{OUT}+\frac{R_2}{R_1+R_2}V_{REF},
$$

and the output changes state when $v_{IN}=v_+$.

### Step 2 — The two trip points

The comparator is inverting: the output is high while $v_{IN}<v_+$.

- With the output high, a rising $v_{IN}$ trips at the higher threshold and the output jumps low:
$$
V_{TRP}^+=\frac{R_1}{R_1+R_2}V_{OH}+\frac{R_2}{R_1+R_2}V_{REF}.
$$
- With the output low, a falling $v_{IN}$ trips at the lower threshold and the output jumps high:
$$
V_{TRP}^-=\frac{R_1}{R_1+R_2}V_{OL}+\frac{R_2}{R_1+R_2}V_{REF}.
$$

When the output jumps low, $v_+$ drops further below $v_{IN}$, so the feedback is positive and the transition regenerative.

### Step 3 — Solve for $R_2$

$$
V_{TRP}^+-V_{TRP}^-=\frac{R_1}{R_1+R_2}(V_{OH}-V_{OL})
\quad\Rightarrow\quad
1\ \mathrm V=\frac{R_1}{R_1+R_2}(2\ \mathrm V)
\quad\Rightarrow\quad
R_2=R_1=100\ \mathrm{k\Omega}.
$$

### Step 4 — Solve for $V_{REF}$ and check

With $R_1/(R_1+R_2)=R_2/(R_1+R_2)=1/2$ and $V_{OL}=0$:

$$
V_{TRP}^-=0.5(0\ \mathrm V)+0.5\,V_{REF}=0\ \mathrm V
\quad\Rightarrow\quad
V_{REF}=0\ \mathrm V .
$$

Check: $V_{TRP}^+=0.5(2\ \mathrm V)+0=1$ V, as required. $R_1$ can therefore simply be returned to ground.

![Inverting hysteresis loop: output high until vIN rises to 1 V, low until vIN falls to 0 V](/q/A394/solution-curves.svg)

The loop has the same thresholds as the noninverting design but the opposite sense: the output is high for low inputs and falls at 1 V, and it returns high only when $v_{IN}$ drops below 0 V. Because the feedback divider here is driven by the output alone (with $V_{REF}=0$), a 50 % divider is enough to give 1 V of hysteresis from a 2-V swing, whereas the noninverting circuit needs $R_2=2R_1$.
