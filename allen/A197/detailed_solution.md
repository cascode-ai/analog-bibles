# Detailed solution - A197

The input enters node B: the drain of M2, the source of M4 and the gate of M3. M3 with an ideal current source at its drain is a high-gain common-source amplifier that drives the gate of M4, so a rise of B turns M4 on harder and pulls B back down. This local feedback (regulated-cascode action) makes the input resistance much smaller than $1/g_{m4}$. Write KCL at B, then follow the large-signal currents for the plot.

### Step 1 — Small-signal relations

M1 is diode-connected and fed by an ideal source, so M2's gate is fixed: M2 is a constant-current sink with output resistance $r_{ds2}$. M3 has its gate at B, its source at ground and an ideal current source at its drain, so its gain onto M4's gate is

$$
v_{g4}=-g_{m3}r_{ds3}\,v_B .
$$

With the output at ac ground, M4 has its drain at ac ground, its source at $v_B$ and its gate at $v_{g4}$; its drain-to-source current is $g_{m4}(v_{g4}-v_B)-g_{ds4}v_B$, and this current enters node B.

### Step 2 — Exact input resistance

M3's gate draws no current, so KCL at B gives

$$
i_{in}=g_{ds2}v_B-\left[g_{m4}(v_{g4}-v_B)-g_{ds4}v_B\right]=\left[g_{ds2}+g_{ds4}+g_{m4}\left(1+g_{m3}r_{ds3}\right)\right]v_B ,
$$

$$
R_{in}=\frac{v_B}{i_{in}}=\frac{1}{g_{ds2}+g_{ds4}+g_{m4}\left(1+g_{m3}r_{ds3}\right)}\approx\frac{1}{g_{m3}g_{m4}r_{ds3}} .
$$

The feedback lowers the resistance by the factor $1+g_{m3}r_{ds3}$ below the $1/g_{m4}$ of a plain common-gate input.

### Step 3 — Simplified value

With identical transistors and $g_m=100g_{ds}$, so $g_mr_{ds}=100$:

$$
R_{in}=\frac{1}{g_{ds}+g_{ds}+100g_{ds}(1+100)}=\frac{1}{(2+100+10^4)\,g_{ds}}=\frac{r_{ds}}{10102}\approx\frac{1}{101\,g_m} .
$$

### Step 4 — $i_{out}$ versus $i_{in}$

M2 sinks the fixed current $I$ set by M1, so KCL at B makes M4 carry $I-i_{in}$. The output current source supplies $I$, so the current flowing into the output terminal, in the direction of the drawn $i_{out}$ arrow, is

$$
i_{out}=(I-i_{in})-I=-i_{in} ,
$$

a straight line of slope −1 through the origin. In small signal, a fraction $g_{ds2}R_{in}$ of $i_{in}$ is lost in $r_{ds2}$, so the exact short-circuit gain is $i_{out}/i_{in}=-(1-g_{ds2}R_{in})=-10101/10102\approx-0.9999$, the same line for practical purposes.

The line holds for $i_{in}<I$. At $i_{in}=I$ the current of M4 reaches zero; for larger $i_{in}$ the excess has no path except $r_{ds2}$, node B rises, M3 is driven into the nonsaturation region and holds M4 off, so $i_{out}$ stays at $-I$. For negative $i_{in}$ the line continues ($i_{out}=|i_{in}|$) until the headroom runs out, a limit the given data do not determine.

![Output current versus input current: slope −1 through the origin, clipped at −I for iin above I](/q/A197/solution-curves.svg)
