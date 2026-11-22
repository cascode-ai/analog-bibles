# Detailed solution - G072

The circuit is symmetric about its vertical center line, and $R_L$ and $R_E$ are the only elements that cross it. Decompose the inputs into differential and common-mode parts: in the differential mode the midpoints of $R_L$ and $R_E$ are at ac ground, so each resistor is split into two halves to ground; in the common mode no current crosses the center line, so $R_L$ and $R_E$ are open.

### Step 1 — Differential-mode half circuit

Apply $v_{i1}=v_{id}/2$ and $v_{i2}=-v_{id}/2$. By antisymmetry every node voltage on the right is the negative of its mirror on the left, so the point at the middle of each resistor that crosses the line stays at 0 V. Splitting $R_L$ and $R_E$ into two equal halves, the left half circuit is a common-emitter stage with

- collector load $R_C\,\|\,(R_L/2)$ ($R_C$ to the ac-grounded supply, $R_L/2$ to the grounded midpoint),
- emitter resistor $R_E/2$ to ground (the ideal $I_{EE}$ is an open circuit for signals).

### Step 2 — Differential-mode gain

For a common-emitter stage with emitter resistance $R$, the emitter current is $g_m(1+1/\beta_0)v_{be}$, so the base voltage is $v_b=v_{be}[1+g_mR(1+1/\beta_0)]$ and the collector voltage is $-g_mv_{be}$ times the load. With $R=R_E/2$, $v_b=v_{id}/2$ and $v_{o1}=v_{od}/2$:

$$
A_{dm}=\frac{v_{od}}{v_{id}}=\frac{v_{o1}}{v_{id}/2}
=-\frac{g_m\left(R_C\,\|\,\tfrac{R_L}{2}\right)}{1+g_m\tfrac{R_E}{2}\left(1+\tfrac1{\beta_0}\right)}
\approx-\frac{R_C\,\|\,(R_L/2)}{1/g_m+R_E/2}.
$$

### Step 3 — Differential-mode input resistance

The half circuit's input resistance, looking into the base, is $r_\pi+(\beta_0+1)R_E/2$; the base current $i_b$ is driven by $v_{id}/2$, so

$$
R_{id}=\frac{v_{id}}{i_b}=2\left[r_\pi+(\beta_0+1)\frac{R_E}{2}\right]=2r_\pi+(\beta_0+1)R_E .
$$

### Step 4 — Common mode

Apply $v_{i1}=v_{i2}=v_{ic}$. Now both sides behave identically, so the two ends of $R_L$ are at the same voltage, as are the two ends of $R_E$; neither carries current, and both can be removed. Each emitter is then connected only to its ideal current source $I_{EE}$, which has infinite small-signal resistance. KCL at the emitter forces the small-signal emitter current to zero:

$$
(\beta_0+1)i_b=0\quad\Rightarrow\quad i_b=0,\qquad i_c=\beta_0i_b=0 .
$$

With no collector current change, $v_{o1}=v_{o2}=0$ and $v_{oc}=0$:

$$
A_{cm}=0,\qquad R_{ic}=\frac{v_{ic}}{i_b}\to\infty .
$$

The emitters simply follow $v_{ic}$ with $v_{be}=0$. The common-mode rejection is therefore infinite under the stated idealizations; in practice $A_{cm}$ and $R_{ic}$ become finite only through the output resistance of the $I_{EE}$ sources and the neglected $r_o$ and $r_\mu$.
