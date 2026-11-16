# Detailed solution - R310

**Approach.** The Miller factor of $C_{GD1}$ is $1 - A_X$, where $A_X$ is the voltage gain from the gate of $M_1$ to node X (drain of $M_1$, source of $M_2$), and $A_X = -g_{m1}Z_X$ depends on the impedance $Z_X$ seen looking into the source of $M_2$. We derive $Z_X$ for a general load impedance $Z_L$ at the drain of $M_2$, show that it is large only at very low frequencies, and that the load capacitance $C_L$ makes it collapse to $1/(g_{m2} + g_{mb2})$ long before the frequencies at which $C_{GD1}$ matters. Miller's theorem must use the gain at those frequencies.

### Step 1 — The usual argument and the apparent paradox

Call the drain of $M_1$ (source of $M_2$) node **X**. By Miller's theorem, $C_{GD1}$, which bridges the gate of $M_1$ and X, appears at the gate as

$$C_{M} = (1 - A_X)\,C_{GD1}, \qquad A_X = \frac{V_X}{V_{G1}} .$$

$M_1$ is a common-source device whose drain sees $Z_X$ (in parallel with $r_{O1}$), so $A_X \approx -g_{m1}Z_X$.

- The usual textbook estimate takes $Z_X\approx 1/(g_{m2} + g_{mb2})$, which gives $C_M\approx\left[1 + g_{m1}/(g_{m2} + g_{mb2})\right]C_{GD1}$, about $2C_{GD1}$.
- But the impedance looking into the source of $M_2$ depends on what loads its drain. With a high-impedance current source $I_1$, it can be much larger than $1/(g_{m2} + g_{mb2})$ (Step 3), which seems to promise a much larger Miller factor.

### Step 2 — Impedance looking into the source of $M_2$

<!-- diagram: diagram-01.cir -->

**Model.** Set the gate of $M_2$ to ac ground ($V_{b2}$) and the bulk to ground. Apply a test voltage $V_X$ at the source and let $I_X$ flow into it. $M_2$ is a current $g_{m2}v_{gs2} + g_{mb2}v_{bs2} = -(g_{m2} + g_{mb2})V_X$ from drain to source, in parallel with $r_{O2}$. The drain (the output) is loaded by $Z_L$ to ground, where

$$Z_L = R_L\parallel\frac{1}{C_Ls},$$

and $R_L$ is the (high) output resistance of the current source $I_1$.

**KCL.** The test current enters the source and has nowhere to go except up through $M_2$ and down through $Z_L$, so $V_{out} = I_XZ_L$. The current flowing from drain to source through $M_2$ is $-I_X$:

$$-I_X = -(g_{m2} + g_{mb2})V_X + \frac{V_{out} - V_X}{r_{O2}} = -(g_{m2} + g_{mb2})V_X + \frac{I_XZ_L - V_X}{r_{O2}}.$$

Collect terms:

$$
\begin{aligned}
I_X\left(1 + \frac{Z_L}{r_{O2}}\right) &= V_X\left(g_{m2} + g_{mb2} + \frac{1}{r_{O2}}\right)\\
Z_X = \frac{V_X}{I_X} &= \frac{r_{O2} + Z_L}{1 + (g_{m2} + g_{mb2})r_{O2}}\approx\frac{Z_L}{(g_{m2} + g_{mb2})r_{O2}} + \frac{1}{g_{m2} + g_{mb2}},
\end{aligned}
$$

where the last form uses $(g_{m2} + g_{mb2})r_{O2}\gg1$. The load impedance is divided by the intrinsic gain of $M_2$ and then added to $1/(g_{m2} + g_{mb2})$.

### Step 3 — At low frequency the Miller factor is indeed large

At dc, $C_L$ is open and $Z_L = R_L$. The first term of $Z_X$ exceeds the second when $R_L > r_{O2}$, which is the case for a high-impedance current source. Then $Z_X$ is much larger than $1/(g_{m2} + g_{mb2})$; for an ideal current source ($R_L\to\infty$) $Z_X\to\infty$ and $Z_X\parallel r_{O1}\to r_{O1}$. Then $|A_X|$ approaches $g_{m1}r_{O1}$ and the dc Miller factor is large. So the premise of the question is correct **at low frequencies**.

### Step 4 — $C_L$ makes $Z_X$ collapse at moderate frequencies

**The output pole is very low.** The resistance at the output is $R_L$ in parallel with the cascode's output resistance, $R_{out} = R_L\parallel\left[r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2}\right]$, which is huge. With a large $C_L$, the output pole $\omega_{out}\approx1/(R_{out}C_L)$ is therefore at a very low frequency (it is the dominant pole of the stage).

**Above that pole $Z_L$ is capacitive and falls.** For $\omega\gg1/(R_LC_L)$, $|Z_L|\approx1/(\omega C_L)$. The first term of $Z_X$ becomes smaller than the second when

$$\frac{1}{\omega C_L} < r_{O2}\quad\Longleftrightarrow\quad \omega > \frac{1}{r_{O2}C_L}.$$

Above this frequency

$$Z_X\approx\frac{1}{g_{m2} + g_{mb2}}\left(1 + \frac{Z_L}{r_{O2}}\right)\to\frac{1}{g_{m2} + g_{mb2}},$$

and the gain from the gate of $M_1$ to X is

$$A_X\approx -\frac{g_{m1}}{g_{m2} + g_{mb2}} .$$

**Physical picture.** At these frequencies $C_L$ is effectively an ac short at the output, so $M_2$ looks like a common-gate device with its drain grounded, whose input impedance is $1/(g_{m2} + g_{mb2})$. This is the same reason the input impedance of a common-gate stage drops to $1/(g_m + g_{mb})$ when its load capacitance is large.

### Step 5 — Evaluate the Miller factor where $C_{GD1}$ matters

$C_{GD1}$ influences the response through the **input pole**, $\omega_{in}\approx1/\{R_S[C_{GS1} + (1 - A_X)C_{GD1}]\}$, which involves only the small device capacitances and the source resistance. It lies far above both the output pole and $1/(r_{O2}C_L)$ when $C_L$ is large. Miller's theorem is valid only with the gain **at the frequency of interest**, and at $\omega_{in}$ the gain is $A_X\approx -g_{m1}/(g_{m2} + g_{mb2})$. Hence

$$C_{M}\approx\left(1 + \frac{g_{m1}}{g_{m2} + g_{mb2}}\right)C_{GD1}.$$

*Illustration* (example values, not given in the problem): $g_{m1} = g_{m2} + g_{mb2} = 5$ mS, $r_{O1} = r_{O2} = 10\ \mathrm{k\Omega}$, $R_L = 1\ \mathrm{M\Omega}$, $C_L = 1$ pF. The output pole is at about 0.47 MHz and $1/(2\pi r_{O2}C_L) = 16$ MHz. The magnitude of the Miller factor $1 - A_X = 1 + g_{m1}(Z_X\parallel r_{O1})$ is:

| Frequency | $\lvert 1 - A_X\rvert$ |
|---|---|
| dc | 34 |
| 1 MHz | 14.5 |
| 10 MHz | 2.5 |
| 100 MHz | 1.97 |
| 1 GHz | 1.96 |

By the time the frequency reaches the GHz range typical of an input pole, the factor is essentially $1 + g_{m1}/(g_{m2} + g_{mb2})\approx2$.

### Step 6 — Why the large low-frequency factor does no harm

One may still ask whether the large Miller effect at low frequencies loads the input. Write the admittance that $C_{GD1}$ presents at the gate (ignoring $r_{O1}$, which only reduces it):

$$Y_M = C_{GD1}s\,(1 + g_{m1}Z_X) \approx C_{GD1}s\left(1 + \frac{g_{m1}}{g_{m2} + g_{mb2}}\right) + \frac{g_{m1}C_{GD1}}{(g_{m2} + g_{mb2})r_{O2}}\,sZ_L(s).$$

Since $sZ_L = sR_L/(1 + R_LC_Ls)$, its magnitude never exceeds $1/C_L$. The extra term is therefore at most a conductance

$$G_{extra}\le\frac{g_{m1}C_{GD1}}{(g_{m2} + g_{mb2})r_{O2}C_L},$$

which is tiny when $C_L$ is large (in the example above it corresponds to 0.5 MΩ for $C_{GD1} = 20$ fF), negligible next to $1/R_S$. Below the output pole the Miller capacitance is large, but the frequency is so low that its admittance stays within the same small bound. So the large dc Miller factor does not create a significant low-frequency pole at the input; the overall response is dominated by the output pole, and the input pole is set by the small factor.

### Result

The impedance at the source of $M_2$ is

$$Z_X\approx\frac{Z_L}{(g_{m2} + g_{mb2})r_{O2}} + \frac{1}{g_{m2} + g_{mb2}}, \qquad Z_L = R_L\parallel\frac{1}{C_Ls}.$$

It is large only at very low frequencies, where $Z_L\approx R_L$. A large $C_L$ creates a very low-frequency output pole; above about $1/(r_{O2}C_L)$, $|Z_L| = 1/(\omega C_L)$ drops below $r_{O2}$ and $Z_X\to1/(g_{m2} + g_{mb2})$. The input pole, where the Miller capacitance of $C_{GD1}$ matters, lies far above that frequency, so the relevant gain from the gate of $M_1$ to X is only $-g_{m1}/(g_{m2} + g_{mb2})$ and $C_{GD1}$ is multiplied by approximately $1 + g_{m1}/(g_{m2} + g_{mb2})$. Using the low-frequency gain in Miller's theorem is not valid here, and the large dc factor only acts at frequencies where it barely affects the response.

**Common mistake.** Concluding that the Miller factor really is large because $Z_X$ is large at dc. Miller's theorem must be applied with the gain at the frequency where the capacitance matters; at the input-pole frequency $C_L$ has already shorted the output and $Z_X\approx1/(g_{m2} + g_{mb2})$.

**Common mistake.** Multiplying $C_{GD1}$ by the overall stage gain $1 + g_{m1}R_{out}$. $C_{GD1}$ connects to X, not to the output; the relevant gain is that from the gate of $M_1$ to X.

**Common mistake.** Asserting that $Z_X$ is always $1/g_{m2}$ regardless of the load. The impedance looking into a source depends on the drain load, $Z_X = (r_{O2} + Z_L)/[1 + (g_{m2} + g_{mb2})r_{O2}]$; it is the large $C_L$ that makes it small at the relevant frequencies.
