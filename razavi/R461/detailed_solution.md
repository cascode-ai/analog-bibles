# Detailed solution - R461

**Approach.** $V_{out} = V_{in}$ *exactly* means exactly zero differential input, which forces equal currents in the input pair and a perfectly balanced mirror, $V_Y = V_X$. Then ask at which output voltage $M_5$, a scaled copy of the diode-connected $M_3$, carries exactly the 1 mA that $M_6$ forces through it once channel-length modulation is included: only when $V_{DS5} = V_{DS3}$, i.e. $V_{out} = V_{GS3}$.

### Step 1 — Zero differential input balances the first stage

With $V_{in} = V_{out}$ the gates of $M_1$ and $M_2$ are at the same voltage and their sources are joined, so the matched pair (PMOS channel-length modulation not considered) splits the ideal tail current equally:

$$I_{D1} = I_{D2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

KCL gives $I_{D3} = I_{D1} = 0.5$ mA and $I_{D4} = I_{D2} = 0.5$ mA. The identical $M_3$ and $M_4$ share the same $V_{GS}$, so with $\lambda_n$ equal currents require equal $(1 + \lambda_nV_{DS})$:

$$1 + \lambda_nV_Y = 1 + \lambda_nV_X \quad\Longrightarrow\quad V_Y = V_X = V_{GS3}.$$

### Step 2 — The condition on $M_5$

$V_{GS5} = V_Y = V_{GS3}$, and the aspect ratios satisfy $(W/L)_5 = 2(W/L)_{3,4}$ (same current density at 0.5 mA and 1 mA). With the square law including channel-length modulation, and $V_{DS3} = V_{GS3}$ (diode) and $V_{DS5} = V_{out}$:

$$
\begin{aligned}
I_{D3} &= \frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_3(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{GS3}) = 0.5\ \mathrm{mA},\\
I_{D5} &= \frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_5(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{out}).
\end{aligned}
$$

Dividing,

$$I_{D5} = 2\,I_{D3}\,\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} = 1\ \mathrm{mA}\times\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} .$$

The ideal $M_6$ forces $I_{D5} = 1$ mA exactly, so

$$
\begin{aligned}
\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} &= 1\\
V_{out} &= V_{GS3} .
\end{aligned}
$$

$M_5$ is then an exact replica of $M_3$ (same $V_{GS}$ and $V_{DS}$, twice the width), and the systematic offset vanishes.

### Step 3 — The value of $V_{GS3}$

Without channel-length modulation the design gives $V_{GS3} = V_{TH} + 0.25\ \mathrm{V} = 0.95$ V. With $\lambda_n$ in the diode-connected $M_3$:

$$(V_{GS3} - V_{TH})^2(1 + \lambda_nV_{GS3}) = \frac{2I_{D3}}{\mu_nC_{ox}(W/L)_3} = (0.25\ \mathrm{V})^2 .$$

Iterating from $V_{GS3} = 0.95$ V:

$$
\begin{aligned}
V_{ov3} &= \frac{0.25\ \mathrm{V}}{\sqrt{1 + 0.1\times0.95}} = \frac{0.25}{1.0464}\ \mathrm{V} = 0.2389\ \mathrm{V} \;\Rightarrow\; V_{GS3} = 0.939\ \mathrm{V},\\
V_{ov3} &= \frac{0.25\ \mathrm{V}}{\sqrt{1 + 0.1\times0.939}} = \frac{0.25}{1.0459}\ \mathrm{V} = 0.2390\ \mathrm{V} \;\Rightarrow\; V_{GS3} = 0.939\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

So

$$V_{in} = V_{out} = V_{GS3} \approx 0.94\ \mathrm{V}$$

(0.95 V if the small effect of $\lambda_n$ on $V_{GS3}$ itself is ignored).

### Step 4 — Why the equality fails at any other level (systematic offset)

At, say, $V_{out} = 1.5$ V, a balanced first stage ($V_Y = V_X$) would make $M_5$ carry

$$1\ \mathrm{mA}\times\frac{1 + 0.1\times1.5}{1 + 0.1\times0.939} = 1\ \mathrm{mA}\times\frac{1.150}{1.094} = 1.05\ \mathrm{mA},$$

5 % more than $M_6$ supplies. Bringing $I_{D5}$ back to 1 mA needs $V_Y$ about 6 mV lower, i.e. an unbalanced first stage, which needs a differential input of about $\Delta V_Y/A_1$ (a fraction of a millivolt here): a **systematic offset** that is zero only at $V_{out} = V_{GS3}$.

### Step 5 — Sensitivity to the device ratio

If the rounded sizes 239 and 119 are taken literally (ratio 2.008), the condition of Step 2 becomes

$$\frac{1 + \lambda_nV_{out}}{1 + \lambda_nV_{GS3}} = \frac{2\times119}{239} = 0.9958 \;\Rightarrow\; V_{out} \approx 0.89\ \mathrm{V}.$$

A 0.4 % ratio error moves the balance point by about 50 mV, because $\lambda_n\Delta V_{DS}$ must cancel it and $\lambda_n$ is only 0.1 V⁻¹. With the intended exact ratio (both sizes from the same 0.25-V overdrive), the answer is the 0.94 V of Step 3.

### Result

The input and output are exactly equal only at

$$V_{in} = V_{out} = V_{GS3} = V_{GS5} \approx 0.94\text{–}0.95\ \mathrm{V},$$

where $M_5$ has the same $V_{GS}$ *and* the same $V_{DS}$ as the diode-connected $M_3$, so it carries exactly $2I_{D3} = 1$ mA with $V_Y = V_X$ and a perfectly balanced first stage. (0.95 V is the $\lambda = 0$ design value; with $\lambda_n$ the diode voltage is about 0.94 V.) At any other level channel-length modulation creates a small systematic offset.

**Common mistake.** Answering "for every input within the allowable range", which holds only if channel-length modulation is ignored; with $\lambda_n \ne 0$, balance occurs at a single output level.

**Common mistake.** Looking for the answer in the PMOS devices (node P, $M_6$/$M_7$). These are ideal current sources here; the condition involves only the NMOS replica pair $M_3$/$M_5$.

**Common mistake.** Stating only "$V_X = V_Y$". That is necessary, but $M_5$ must also match $M_3$'s *drain* voltage, which fixes $V_{out} = V_{GS3}$.
