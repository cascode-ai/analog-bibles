# Detailed solution - R307

**Approach.** At very low frequency $C_1$ and $C_2$ are open circuits; at very high frequency they are short circuits. For each extreme, identify what $M_1$, $M_3$, $R_1$ and $R_2$ become and compute the gain by KCL at node X (source of $M_2$) and at the output. The capacitors change $M_1$ from a diode into a current source and turn $M_3$ from a current source into a second, signal-driven transconductor.

### Step 1 — Very low frequencies: what the circuit becomes

Call the source of $M_2$ (drain of $M_1$) node X, the gate of $M_1$ G1 and the gate of $M_3$ G3; $V_{DD}$, $V_b$ and ground are ac grounds. With $C_1$ and $C_2$ open, $R_1$ and $R_2$ carry no current, so:

- **G1** sits at the voltage of X: $M_1$ is **diode-connected**, and the resistance from X to ground is
$$R_X = \frac{1}{g_{m1}}\parallel r_{O1} = \frac{r_{O1}}{1 + g_{m1}r_{O1}}.$$
- **G3** sits at $V_b$, an ac ground: $M_3$ is a **current source** with output resistance $r_{O3}$.

So $M_2$ is a common-source stage with source degeneration $R_X$ and load $r_{O3}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Very low frequencies: the gain

Let $i_2 = g_{m2}(V_{in} - V_X) + (V_{out} - V_X)/r_{O2}$ be the current from the output to X through $M_2$ and $r_{O2}$. KCL at the output (the current arriving through $r_{O3}$ is $-V_{out}/r_{O3}$) and at X:

$$i_2 = -\frac{V_{out}}{r_{O3}} , \qquad (1)$$

$$i_2 = \frac{V_X}{R_X}\quad\Longrightarrow\quad V_X = -\frac{R_X}{r_{O3}}V_{out}. \qquad (2)$$

Write out (1) and substitute (2):

$$
\begin{aligned}
g_{m2}V_{in} - g_{m2}V_X + \frac{V_{out}}{r_{O2}} - \frac{V_X}{r_{O2}} &= -\frac{V_{out}}{r_{O3}}\\
g_{m2}V_{in} + V_{out}\left(\frac{1}{r_{O2}} + \frac{1}{r_{O3}}\right) &= V_X\left(g_{m2} + \frac{1}{r_{O2}}\right) = -\frac{R_X}{r_{O3}}\left(g_{m2} + \frac{1}{r_{O2}}\right)V_{out}.
\end{aligned}
$$

Collecting $V_{out}$ and multiplying through by $r_{O2}r_{O3}$:

$$g_{m2}r_{O2}r_{O3}V_{in} = -V_{out}\left[r_{O3} + r_{O2} + (1 + g_{m2}r_{O2})R_X\right],$$

$$A_{v,low} = -\frac{g_{m2}r_{O2}r_{O3}}{r_{O2} + r_{O3} + (1 + g_{m2}r_{O2})R_X}.$$

Substituting $R_X = r_{O1}/(1 + g_{m1}r_{O1})$ and multiplying numerator and denominator by $(1 + g_{m1}r_{O1})$:

$$A_{v,low} = -\frac{g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})}{r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}(r_{O2} + r_{O3}) + g_{m2}r_{O1}r_{O2}}.$$

With $R_X\approx1/g_{m1}$ and $g_{m2}r_{O2}\gg1$, dividing the first form by $r_{O2}$:

$$A_{v,low}\approx -\frac{g_{m2}r_{O3}}{1 + \dfrac{g_{m2}}{g_{m1}} + \dfrac{r_{O3}}{r_{O2}}}\ \approx\ -\frac{g_{m1}g_{m2}}{g_{m1} + g_{m2}}\,r_{O3}\quad(r_{O2}\gg r_{O3}).$$

The diode-connected $M_1$ degenerates $M_2$ strongly: for $g_{m1} = g_{m2}$ the effective transconductance is halved.

### Step 3 — Very high frequencies: what the circuit becomes

With $C_1$ and $C_2$ shorted:

- **$C_1$ shorts G1 to ground.** $M_1$ is a **current source** ($r_{O1}$ from X to ground), and $R_1$, now from X to ac ground, **loads X**.
- **$C_2$ shorts G3 to X.** $M_3$ becomes a **transconductor** driven by $V_X$, drawing $g_{m3}V_X$ from the output to ac ground in parallel with $r_{O3}$. $R_2$, now from X to $V_b$, **also loads X**.

The total resistance from X to ground is

$$R_X' = r_{O1}\parallel R_1\parallel R_2 .$$

<!-- diagram: diagram-02.cir -->

### Step 4 — Very high frequencies: the gain

With $i_2$ as before, KCL at the output ($i_2$ through $M_2$ and $g_{m3}V_X + V_{out}/r_{O3}$ through $M_3$ both leave it) and at X (the gate of $M_3$ draws no current):

$$i_2 + g_{m3}V_X + \frac{V_{out}}{r_{O3}} = 0 , \qquad (3)$$

$$i_2 = \frac{V_X}{R_X'} . \qquad (4)$$

Inserting (4) into (3):

$$V_{out} = -r_{O3}\left(g_{m3} + \frac{1}{R_X'}\right)V_X\quad\Longrightarrow\quad V_X = -\frac{V_{out}}{r_{O3}\left(g_{m3} + 1/R_X'\right)}. \qquad (5)$$

Writing (4) out:

$$g_{m2}(V_{in} - V_X) + \frac{V_{out} - V_X}{r_{O2}} = \frac{V_X}{R_X'}\quad\Longrightarrow\quad g_{m2}V_{in} + \frac{V_{out}}{r_{O2}} = V_X\left(g_{m2} + \frac{1}{r_{O2}} + \frac{1}{R_X'}\right).$$

Substitute (5) and multiply by $r_{O3}(g_{m3} + 1/R_X')$:

$$
\begin{aligned}
g_{m2}r_{O3}\left(g_{m3} + \tfrac{1}{R_X'}\right)V_{in} + \frac{r_{O3}}{r_{O2}}\left(g_{m3} + \tfrac{1}{R_X'}\right)V_{out} &= -\left(g_{m2} + \tfrac{1}{r_{O2}} + \tfrac{1}{R_X'}\right)V_{out}\\
A_{v,high} &= -\frac{g_{m2}r_{O3}\left(g_{m3} + 1/R_X'\right)}{g_{m2} + 1/R_X' + 1/r_{O2} + (r_{O3}/r_{O2})\left(g_{m3} + 1/R_X'\right)}.
\end{aligned}
$$

For $r_{O2}\to\infty$, multiplying numerator and denominator by $R_X'$:

$$A_{v,high}\approx -g_{m2}r_{O3}\,\frac{1 + g_{m3}R_X'}{1 + g_{m2}R_X'} ,$$

and if also $g_{m2}R_X'\gg1$ and $g_{m3}R_X'\gg1$:

$$A_{v,high}\approx -g_{m3}r_{O3}.$$

With the high resistance $R_X'$ at X, $M_2$ acts almost as a source follower and X tracks $V_{in}$. Through $C_2$, $V_X$ drives $M_3$'s gate, so when $V_{in}$ rises $M_2$ pulls the output down harder *and* $M_3$ pushes less current up into it: this push–pull action makes $M_3$ the main source of gain at high frequency.

### Step 5 — Comparing the two extremes

For comparable transconductances ($g_{m1}\approx g_{m2}\approx g_{m3} = g_m$) and $r_{O2}\gg r_{O3}$, the low-frequency gain is about $-\tfrac12g_mr_{O3}$ (degeneration by the diode $M_1$), while the high-frequency gain approaches $-g_mr_{O3}$ (push–pull through $M_3$). The gain therefore *rises* with frequency, by up to a factor of about 2 in this case; the exact ratio depends on the device values, and the gain can even fall if $g_{m3}$ is much smaller than $g_{m1}$, $g_{m2}$.

### Result

**Very low frequencies** ($C_1$, $C_2$ open; $M_1$ diode-connected through $R_1$, $R_X = (1/g_{m1})\parallel r_{O1}$; $M_3$ a current source):

$$A_{v,low} = -\frac{g_{m2}r_{O2}r_{O3}}{r_{O2} + r_{O3} + (1 + g_{m2}r_{O2})R_X} = -\frac{g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})}{r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}(r_{O2} + r_{O3}) + g_{m2}r_{O1}r_{O2}}$$

$$\approx -\frac{g_{m2}r_{O3}}{1 + g_{m2}/g_{m1} + r_{O3}/r_{O2}}\approx -\frac{g_{m1}g_{m2}}{g_{m1} + g_{m2}}r_{O3}\quad(r_{O2}\gg r_{O3}).$$

**Very high frequencies** ($C_1$, $C_2$ shorted; $M_1$ a current source, $R_1$ and $R_2$ load X, $M_3$ driven by $V_X$; $R_X' = r_{O1}\parallel R_1\parallel R_2$):

$$A_{v,high} = -\frac{g_{m2}r_{O3}\left(g_{m3} + 1/R_X'\right)}{g_{m2} + 1/R_X' + 1/r_{O2} + (r_{O3}/r_{O2})\left(g_{m3} + 1/R_X'\right)}\approx -g_{m2}r_{O3}\,\frac{1 + g_{m3}R_X'}{1 + g_{m2}R_X'},$$

which approaches $-g_{m3}r_{O3}$ for $g_{m2}R_X'\gg1$.

**Common mistake.** Treating $M_1$ as a current source at low frequency. With $C_1$ open, $R_1$ carries no current, so $M_1$'s gate follows its drain: it is diode-connected and degenerates $M_2$ by about $1/g_{m1}$.

**Common mistake.** Missing $M_3$'s transconductance at high frequency. $C_2$ connects $M_3$'s gate to X (not to the output), so $M_3$ is driven by $V_X\approx V_{in}$ and contributes $g_{m3}$; reading $C_2$ as going to the output would wrongly make $M_3$ diode-connected.

**Common mistake.** Forgetting that $R_1$ and $R_2$ load X at high frequency. At dc they carry no current, but once $C_1$ and $C_2$ are shorts both connect X to ac grounds and appear in $R_X' = r_{O1}\parallel R_1\parallel R_2$.
