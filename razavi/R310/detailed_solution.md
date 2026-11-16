# Detailed solution - R310

**Approach.** The Miller factor of $C_{GD1}$ is $1 - A_X$, where $A_X = -g_{m1}Z_X$ is the gain from the gate of $M_1$ to node X (drain of $M_1$, source of $M_2$) and $Z_X$ is the impedance looking into the source of $M_2$. Derive $Z_X$ for a general load $Z_L$ at the drain of $M_2$, and show that it is large only at very low frequencies: $C_L$ makes it collapse to $1/(g_{m2} + g_{mb2})$ long before the frequencies at which $C_{GD1}$ matters, and Miller's theorem must use the gain at those frequencies.

### Step 1 — The usual argument and the apparent paradox

Call the drain of $M_1$ (source of $M_2$) node **X**. By Miller's theorem, $C_{GD1}$ appears at the gate of $M_1$ as

$$C_{M} = (1 - A_X)\,C_{GD1}, \qquad A_X = \frac{V_X}{V_{G1}}\approx -g_{m1}Z_X$$

($Z_X$ in parallel with $r_{O1}$). The usual estimate $Z_X\approx 1/(g_{m2} + g_{mb2})$ gives $C_M\approx\left[1 + g_{m1}/(g_{m2} + g_{mb2})\right]C_{GD1}$, about $2C_{GD1}$. But with a high-impedance current source $I_1$ at the drain of $M_2$, $Z_X$ can be much larger (Step 3), which seems to promise a much larger Miller factor.

### Step 2 — Impedance looking into the source of $M_2$

<!-- diagram: diagram-01.cir -->

With the gate of $M_2$ at ac ground ($V_{b2}$) and its bulk grounded, apply a test voltage $V_X$ at the source, drawing $I_X$. $M_2$ is a current $-(g_{m2} + g_{mb2})V_X$ from drain to source, in parallel with $r_{O2}$, and its drain (the output) is loaded by

$$Z_L = R_L\parallel\frac{1}{C_Ls},$$

where $R_L$ is the (high) output resistance of $I_1$. The test current can only flow up through $M_2$ and down through $Z_L$, so $V_{out} = I_XZ_L$, and the current from drain to source through $M_2$ is $-I_X$:

$$-I_X = -(g_{m2} + g_{mb2})V_X + \frac{V_{out} - V_X}{r_{O2}} = -(g_{m2} + g_{mb2})V_X + \frac{I_XZ_L - V_X}{r_{O2}}.$$

Collecting terms, and using $(g_{m2} + g_{mb2})r_{O2}\gg1$ in the last form:

$$
\begin{aligned}
I_X\left(1 + \frac{Z_L}{r_{O2}}\right) &= V_X\left(g_{m2} + g_{mb2} + \frac{1}{r_{O2}}\right)\\
Z_X = \frac{V_X}{I_X} &= \frac{r_{O2} + Z_L}{1 + (g_{m2} + g_{mb2})r_{O2}}\approx\frac{Z_L}{(g_{m2} + g_{mb2})r_{O2}} + \frac{1}{g_{m2} + g_{mb2}}.
\end{aligned}
$$

The load impedance is divided by the intrinsic gain of $M_2$ and added to $1/(g_{m2} + g_{mb2})$.

### Step 3 — At low frequency the Miller factor is indeed large

At dc, $Z_L = R_L$, and the first term of $Z_X$ dominates when $R_L > r_{O2}$, as for a high-impedance current source. For an ideal one ($R_L\to\infty$), $Z_X\to\infty$ and $Z_X\parallel r_{O1}\to r_{O1}$, so $|A_X|$ approaches $g_{m1}r_{O1}$. The premise of the question is correct **at low frequencies**.

### Step 4 — $C_L$ makes $Z_X$ collapse at moderate frequencies

The output resistance, $R_{out} = R_L\parallel\left[r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2}\right]$, is huge, so with a large $C_L$ the output pole $\omega_{out}\approx1/(R_{out}C_L)$ is very low (the dominant pole of the stage). For $\omega\gg1/(R_LC_L)$, $|Z_L|\approx1/(\omega C_L)$, and the first term of $Z_X$ becomes smaller than the second when

$$\frac{1}{\omega C_L} < r_{O2}\quad\Longleftrightarrow\quad \omega > \frac{1}{r_{O2}C_L}.$$

Above this frequency

$$Z_X\approx\frac{1}{g_{m2} + g_{mb2}}\left(1 + \frac{Z_L}{r_{O2}}\right)\to\frac{1}{g_{m2} + g_{mb2}}, \qquad A_X\approx -\frac{g_{m1}}{g_{m2} + g_{mb2}} .$$

$C_L$ now acts as an ac short at the output, so $M_2$ is a common-gate device with its drain grounded, of input impedance $1/(g_{m2} + g_{mb2})$ (just as a common-gate stage's input impedance drops to $1/(g_m + g_{mb})$ with a large load capacitance).

### Step 5 — Evaluate the Miller factor where $C_{GD1}$ matters

$C_{GD1}$ acts through the **input pole**, $\omega_{in}\approx1/\{R_S[C_{GS1} + (1 - A_X)C_{GD1}]\}$, set by the small device capacitances and the source resistance, far above both the output pole and $1/(r_{O2}C_L)$ when $C_L$ is large. Miller's theorem is valid only with the gain **at the frequency of interest**, which there is $A_X\approx -g_{m1}/(g_{m2} + g_{mb2})$. Hence

$$C_{M}\approx\left(1 + \frac{g_{m1}}{g_{m2} + g_{mb2}}\right)C_{GD1}.$$

*Illustration* (example values, not given in the problem): $g_{m1} = g_{m2} + g_{mb2} = 5$ mS, $r_{O1} = r_{O2} = 10\ \mathrm{k\Omega}$, $R_L = 1\ \mathrm{M\Omega}$, $C_L = 1$ pF. The output pole is at about 0.47 MHz and $1/(2\pi r_{O2}C_L) = 16$ MHz. The Miller factor $1 - A_X = 1 + g_{m1}(Z_X\parallel r_{O1})$ has magnitude:

| Frequency | $\lvert 1 - A_X\rvert$ |
|---|---|
| dc | 34 |
| 1 MHz | 14.5 |
| 10 MHz | 2.5 |
| 100 MHz | 1.97 |
| 1 GHz | 1.96 |

In the GHz range typical of an input pole, the factor is essentially $1 + g_{m1}/(g_{m2} + g_{mb2})\approx2$.

### Step 6 — Why the large low-frequency factor does no harm

The admittance that $C_{GD1}$ presents at the gate (ignoring $r_{O1}$, which only reduces it) is

$$Y_M = C_{GD1}s\,(1 + g_{m1}Z_X) \approx C_{GD1}s\left(1 + \frac{g_{m1}}{g_{m2} + g_{mb2}}\right) + \frac{g_{m1}C_{GD1}}{(g_{m2} + g_{mb2})r_{O2}}\,sZ_L(s).$$

Since $sZ_L = sR_L/(1 + R_LC_Ls)$ never exceeds $1/C_L$ in magnitude, the extra term is at most a conductance

$$G_{extra}\le\frac{g_{m1}C_{GD1}}{(g_{m2} + g_{mb2})r_{O2}C_L},$$

tiny when $C_L$ is large (0.5 MΩ in the example above for $C_{GD1} = 20$ fF) and negligible next to $1/R_S$. Below the output pole the Miller capacitance is large, but the frequency is so low that its admittance stays within this bound. So the large dc factor creates no significant low-frequency input pole: the response is dominated by the output pole, and the input pole is set by the small factor.

### Result

The impedance at the source of $M_2$ is

$$Z_X\approx\frac{Z_L}{(g_{m2} + g_{mb2})r_{O2}} + \frac{1}{g_{m2} + g_{mb2}}, \qquad Z_L = R_L\parallel\frac{1}{C_Ls}.$$

It is large only at very low frequencies, where $Z_L\approx R_L$. A large $C_L$ creates a very low-frequency output pole; above about $1/(r_{O2}C_L)$, $|Z_L| = 1/(\omega C_L)$ drops below $r_{O2}$ and $Z_X\to1/(g_{m2} + g_{mb2})$. The input pole, where the Miller capacitance of $C_{GD1}$ matters, lies far above that frequency, so the relevant gain from the gate of $M_1$ to X is only $-g_{m1}/(g_{m2} + g_{mb2})$ and $C_{GD1}$ is multiplied by approximately $1 + g_{m1}/(g_{m2} + g_{mb2})$. Using the low-frequency gain in Miller's theorem is not valid here, and the large dc factor only acts at frequencies where it barely affects the response.

**Common mistake.** Concluding that the Miller factor really is large because $Z_X$ is large at dc. The gain must be taken at the frequency where the capacitance matters, where $C_L$ has already shorted the output and $Z_X\approx1/(g_{m2} + g_{mb2})$.

**Common mistake.** Multiplying $C_{GD1}$ by the overall stage gain $1 + g_{m1}R_{out}$. $C_{GD1}$ connects to X, not to the output; the relevant gain is that from the gate of $M_1$ to X.

**Common mistake.** Asserting that $Z_X$ is always $1/g_{m2}$ regardless of the load. It is $(r_{O2} + Z_L)/[1 + (g_{m2} + g_{mb2})r_{O2}]$; the large $C_L$ is what makes it small at the relevant frequencies.
