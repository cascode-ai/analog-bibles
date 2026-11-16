# Detailed solution - R461

**Approach.** $V_{out} = V_{in}$ *exactly* means the op amp operates with exactly zero differential input. We work out what that implies inside the circuit: equal currents in the input pair, hence a perfectly balanced mirror with $V_Y = V_X$. Then we ask under which output voltage $M_5$, a scaled copy of the diode-connected $M_3$, carries exactly the 1 mA that $M_6$ forces through it once channel-length modulation is included. The answer is: only when $V_{DS5} = V_{DS3}$, i.e. $V_{out} = V_{GS3}$.

### Step 1 — The circuit in unity-gain feedback

From the figure: PMOS input pair $M_1$ (gate tied to $V_{out}$) and $M_2$ (gate at $V_{in}$), with the ideal 1-mA tail $M_7$; NMOS mirror load $M_3$ (diode-connected, drain and gate at X) and $M_4$ (gate at X, drain at Y); output stage $M_5$ (gate at Y) loaded by the ideal 1-mA source $M_6$.

The NMOS devices obey the square law with channel-length modulation:

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2(1 + \lambda_nV_{DS}),$$

where $\lambda_n = 0.1\ \mathrm{V^{-1}}$ makes the current grow slightly with the drain-source voltage. The aspect ratios satisfy $(W/L)_5 = 2(W/L)_{3,4}$: they were chosen for the same current density ($V_{GS} = 0.95$ V at 0.5 mA and 1 mA respectively).

### Step 2 — Zero differential input balances the first stage

If $V_{in} = V_{out}$, the gates of $M_1$ and $M_2$ are at the same voltage. Their sources are joined at P, so they have equal $V_{GS}$ and (being matched, with PMOS channel-length modulation not considered) equal currents. The ideal tail fixes the sum:

$$I_{D1} = I_{D2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

KCL at X and at Y gives $I_{D3} = I_{D1} = 0.5$ mA and $I_{D4} = I_{D2} = 0.5$ mA. $M_3$ and $M_4$ are identical and have the same $V_{GS}$ (both gates at X, both sources grounded), so equal currents require equal values of $(1 + \lambda_nV_{DS})$:

$$1 + \lambda_nV_Y = 1 + \lambda_nV_X \quad\Longrightarrow\quad V_Y = V_X = V_{GS3}.$$

### Step 3 — The condition on $M_5$

$M_5$ has its gate at Y, so $V_{GS5} = V_Y = V_{GS3}$: it sees exactly the same gate-source voltage as $M_3$. Write the two currents with the square law:

$$
\begin{aligned}
I_{D3} &= \frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_3(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{GS3}) = 0.5\ \mathrm{mA},\\
I_{D5} &= \frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_5(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{out}).
\end{aligned}
$$

(The drain-source voltage of the diode-connected $M_3$ equals its $V_{GS3}$; that of $M_5$ is $V_{out}$.) Dividing the second line by the first and using $(W/L)_5 = 2(W/L)_3$:

$$I_{D5} = 2\,I_{D3}\,\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} = 1\ \mathrm{mA}\times\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} .$$

But $M_6$ is an ideal source, so KCL at the output forces $I_{D5} = 1$ mA exactly. Therefore

$$
\begin{aligned}
\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} &= 1\\
V_{out} &= V_{GS3} .
\end{aligned}
$$

**Interpretation.** $M_5$ is then an exact replica of $M_3$ (same $V_{GS}$, same $V_{DS}$, twice the width) and carries exactly twice its current. The first stage is perfectly balanced and the systematic offset vanishes.

### Step 4 — The value of $V_{GS3}$

Without channel-length modulation, the design gives $V_{GS3} = V_{TH} + 0.25\ \mathrm{V} = 0.95$ V. Including $\lambda_n$ in the diode-connected $M_3$ ($V_{DS3} = V_{GS3}$):

$$(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{GS3}) = \frac{2I_{D3}}{\mu_nC_{ox}(W/L)_3} = (0.25\ \mathrm{V})^2 .$$

Solve by iteration, starting from $V_{GS3} = 0.95$ V:

$$
\begin{aligned}
V_{ov3} &= \frac{0.25\ \mathrm{V}}{\sqrt{1 + 0.1\times0.95}} = \frac{0.25}{1.0464}\ \mathrm{V} = 0.2389\ \mathrm{V} \;\Rightarrow\; V_{GS3} = 0.939\ \mathrm{V},\\
V_{ov3} &= \frac{0.25\ \mathrm{V}}{\sqrt{1 + 0.1\times0.939}} = \frac{0.25}{1.0459}\ \mathrm{V} = 0.2390\ \mathrm{V} \;\Rightarrow\; V_{GS3} = 0.939\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

So

$$V_{in} = V_{out} = V_{GS3} \approx 0.94\ \mathrm{V}$$

(0.95 V if the small effect of $\lambda_n$ on $V_{GS3}$ itself is ignored).

### Step 5 — Why the equality fails at any other level (systematic offset)

Suppose the input, and so the output, sits at a different level, say $V_{out} = 1.5$ V. If the first stage were balanced ($V_Y = V_X$), $M_5$ would carry

$$1\ \mathrm{mA}\times\frac{1 + 0.1\times1.5}{1 + 0.1\times0.939} = 1\ \mathrm{mA}\times\frac{1.150}{1.094} = 1.05\ \mathrm{mA},$$

5 % more than $M_6$ supplies. To bring $I_{D5}$ back to 1 mA, $V_Y$ must drop by about 6 mV, so the first stage cannot be balanced. A first-stage output imbalance $\Delta V_Y$ needs a differential input of about $\Delta V_Y/A_1$ (a fraction of a millivolt here). Hence $V_{in}$ and $V_{out}$ differ slightly: a **systematic offset** that is zero only at $V_{out} = V_{GS3}$.

### Step 6 — Sensitivity to the device ratio

The balance point depends on how precisely $(W/L)_5 = 2(W/L)_3$. If the rounded sizes 239 and 119 are taken literally (ratio 2.008), the condition of Step 3 becomes

$$\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} = \frac{2\times119}{239} = 0.9958 \;\Rightarrow\; V_{out} \approx 0.89\ \mathrm{V}.$$

A 0.4 % ratio error moves the balance point by about 50 mV, because $\lambda_n\Delta V_{DS}$ has to cancel it and $\lambda_n$ is only 0.1 V⁻¹. With the intended exact ratio (both sizes derived from the same 0.25-V overdrive), the answer is the 0.94 V of Step 4.

### Result

The input and output are exactly equal only at

$$V_{in} = V_{out} = V_{GS3} = V_{GS5} \approx 0.94\text{–}0.95\ \mathrm{V},$$

where $M_5$ has the same $V_{GS}$ *and* the same $V_{DS}$ as the diode-connected $M_3$, so it carries exactly $2I_{D3} = 1$ mA with $V_Y = V_X$ and a perfectly balanced first stage. (0.95 V is the $\lambda = 0$ design value; with $\lambda_n$ the diode voltage is about 0.94 V.) At any other level channel-length modulation creates a small systematic offset.

**Common mistake.** Answering "for every input within the allowable range". That is true only if channel-length modulation is ignored. With $\lambda_n \ne 0$, $M_5$'s current depends on $V_{out}$, and balance occurs at a single output level.

**Common mistake.** Looking for the answer in the PMOS devices (e.g. a condition on node P or on $M_6$/$M_7$). These are ideal current sources here; the balance condition involves only the NMOS replica pair $M_3$/$M_5$.

**Common mistake.** Stating only "$V_X = V_Y$". That is necessary, but the key extra step is that $M_5$ must also match $M_3$'s *drain* voltage, which fixes $V_{out} = V_{GS3}$.
