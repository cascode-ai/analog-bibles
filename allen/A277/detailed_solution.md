# Detailed solution - A277

Every current in the op amp is a fixed multiple of $I_B$ ($I_5=k_1I_B$, $I_6=I_7=k_2I_B$, and the bias branch likewise), while all sizes and capacitors stay fixed. Each performance quantity is therefore a power law in $I_B$, which is a straight line on log–log axes. Normalizing to $I_B=10$ µA makes every line pass through 1 there, and the only information needed is the exponent.

### Step 1 — How the small-signal parameters scale

In strong-inversion saturation, with $W/L$ fixed,

$$
g_m=\sqrt{2K'(W/L)I_D}\propto I_B^{1/2},\qquad g_{ds}=\lambda I_D\propto I_B .
$$

Both $g_{m1}$ (at $k_1I_B/2$) and $g_{m6}$ (at $k_2I_B$) follow the first law; every $g_{ds}$ follows the second.

### Step 2 — Exponent of each quantity

Substituting these laws into the standard two-stage expressions:

$$
\begin{aligned}
A_v(0)&=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})}\propto\frac{I_B^{1/2}I_B^{1/2}}{I_B\cdot I_B}=I_B^{-1},\\
GB&=\frac{g_{m1}}{C_c}\propto I_B^{1/2},\qquad z=\frac{g_{m6}}{C_c}\propto I_B^{1/2},\\
P_{diss}&=(V_{DD}-V_{SS})(k_1+k_2+k_{bias})I_B\propto I_B,\qquad SR=\frac{k_1I_B}{C_c}\propto I_B,\\
R_{out}&=\frac1{g_{ds6}+g_{ds7}}\propto I_B^{-1},\qquad |p_1|=\frac{GB}{A_v(0)}\propto\frac{I_B^{1/2}}{I_B^{-1}}=I_B^{3/2}.
\end{aligned}
$$

The dominant pole rises fastest because GB grows while the gain falls.

### Step 3 — Normalized values and slopes

With $x=I_B/(10\ \mu\mathrm A)$, each normalized quantity is $x^n$, a line of slope $n$ decades per decade:

| Quantity | Law | Slope | at 100 µA | at 1000 µA |
|---|---|---|---|---|
| $A_v(0)$ | $x^{-1}$ | −1 | 0.1 | 0.01 |
| GB | $x^{1/2}$ | +1/2 | 3.16 | 10 |
| $P_{diss}$ | $x$ | +1 | 10 | 100 |
| SR | $x$ | +1 | 10 | 100 |
| $R_{out}$ | $x^{-1}$ | −1 | 0.1 | 0.01 |
| $\lvert p_1\rvert$ | $x^{3/2}$ | +3/2 | 31.6 | 1000 |
| $z$ | $x^{1/2}$ | +1/2 | 3.16 | 10 |

### Step 4 — Log–log plot

Pairs with the same exponent fall on the same line: $A_v(0)$ with $R_{out}$, GB with $z$, and $P_{diss}$ with SR. Over 10–1000 µA the $|p_1|$ line spans 1 to $10^3$, the top of the requested range, and $A_v(0)$, $R_{out}$ end at $10^{-2}$.

![Log–log plot of seven normalized op-amp quantities versus bias current, four straight lines of slopes −1, +1/2, +1 and +3/2 through 1 at 10 µA](/q/A277/solution-curves.svg)

The lines hold only while every device stays in strong-inversion saturation; at low currents the transistors enter weak inversion, where $g_m\propto I_D$ and these exponents change.
