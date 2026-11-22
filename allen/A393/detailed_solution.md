# Detailed solution - A393

The comparator switches when its noninverting input crosses $V_{REF}$. That input is a resistive mix of $v_{IN}$ and the present output level, so the input voltage at which it crosses depends on whether the output is low or high. Writing both trip points and solving the two specifications gives $R_2$ and $V_{REF}$.

### Step 1 — Noninverting input voltage

The comparator draws no input current, so $v_+$ is set by superposition through the divider $R_1$, $R_2$:

$$
v_+=\frac{R_2}{R_1+R_2}v_{IN}+\frac{R_1}{R_1+R_2}v_{OUT}.
$$

The output changes state when $v_+=V_{REF}$.

### Step 2 — The two trip points

Solving $v_+=V_{REF}$ for $v_{IN}$:

$$
v_{IN}=\frac{R_1+R_2}{R_2}V_{REF}-\frac{R_1}{R_2}v_{OUT}.
$$

- With the output low ($v_{OUT}=V_{OL}$), $v_{IN}$ must rise to make $v_+$ reach $V_{REF}$, and then the output jumps high:
$$
V_{TRP}^+=\frac{R_1+R_2}{R_2}V_{REF}-\frac{R_1}{R_2}V_{OL}.
$$
- With the output high ($v_{OUT}=V_{OH}$), the feedback holds $v_+$ up, so $v_{IN}$ must fall lower before the output jumps low:
$$
V_{TRP}^-=\frac{R_1+R_2}{R_2}V_{REF}-\frac{R_1}{R_2}V_{OH}.
$$

The positive feedback makes the jump regenerative, and the output moves in the same direction as the input (a noninverting loop).

### Step 3 — Solve for $R_2$

The hysteresis width depends only on the resistor ratio and the output swing:

$$
V_{TRP}^+-V_{TRP}^-=\frac{R_1}{R_2}(V_{OH}-V_{OL})
\quad\Rightarrow\quad
1\ \mathrm V=\frac{R_1}{R_2}(2\ \mathrm V)
\quad\Rightarrow\quad
R_2=2R_1=200\ \mathrm{k\Omega}.
$$

### Step 4 — Solve for $V_{REF}$ and check

With $R_1/R_2=1/2$ and $V_{OL}=0$:

$$
V_{TRP}^+=1.5\,V_{REF}-0.5(0\ \mathrm V)=1\ \mathrm V
\quad\Rightarrow\quad
V_{REF}=\frac23\ \mathrm V=0.667\ \mathrm V .
$$

Check the other trip point: $V_{TRP}^-=1.5(0.667\ \mathrm V)-0.5(2\ \mathrm V)=0$ V, as required.

![Noninverting hysteresis loop: output low until vIN rises to 1 V, high until vIN falls to 0 V](/q/A393/solution-curves.svg)

The output stays at $V_{OL}=0$ V as $v_{IN}$ rises until 1 V, then jumps to $V_{OH}=2$ V; it stays high as $v_{IN}$ falls until 0 V, then jumps back. Between 0 and 1 V the output depends on its history.
