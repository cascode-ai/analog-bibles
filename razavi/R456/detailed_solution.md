# Detailed solution - R456

**Approach.** With zero differential input the first stage is balanced and $V_Y = V_X = V_{GS3}$ (the diode-connected mirror device fixes the voltage at X). Node Y is the gate of $M_5$, so $M_5$ carries its intended 1 mA only if $V_{GS3}$ equals the $V_{GS5}$ that $M_5$ needs. With the square law, equal gate-source voltages mean equal current *densities* $I_D/(W/L)$, which fixes $(W/L)_3$.

### Step 1 — Why $V_Y = V_X$ when $V_{in} = 0$

From the figure: PMOS input pair $M_1$–$M_2$ with tail $M_7$; NMOS mirror load with $M_3$ diode-connected (gate and drain at X) and $M_4$ (gate at X, drain at Y); Y drives the gate of $M_5$.

With $V_{in} = 0$, the tail current (1 mA) splits equally, so

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = 0.5\ \mathrm{mA}.$$

$M_3$ and $M_4$ are identical, have the same gate-source voltage (both gates at X, both sources grounded) and carry the same current. Hence their drain voltages are equal too (exactly so if channel-length modulation is neglected, and also when it is included, by symmetry):

$$V_Y = V_X = V_{GS3}.$$

### Step 2 — The voltage $M_5$ needs

$M_5$ must carry $I_{D5} = 1$ mA with $(W/L)_5 = 239$, i.e. with an overdrive $V_{ov5} = 0.25$ V (the overdrive voltage is $V_{ov} = V_{GS} - V_{TH}$). Its source is grounded, so there is no body effect:

$$V_{GS5} = V_{TH0} + V_{ov5} = 0.7\ \mathrm{V} + 0.25\ \mathrm{V} = 0.95\ \mathrm{V}.$$

Since $V_{GS5} = V_Y = V_{GS3}$, the design condition is

$$V_{GS3} = 0.95\ \mathrm{V}, \qquad\text{i.e.}\qquad V_{ov3} = V_{ov5} = 0.25\ \mathrm{V}.$$

### Step 3 — Current-density argument

The square law in saturation (neglecting channel-length modulation) is

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2 \quad\Longrightarrow\quad V_{ov} = \sqrt{\frac{2}{\mu_nC_{ox}}\cdot\frac{I_D}{W/L}} .$$

The overdrive depends only on the current density $I_D/(W/L)$. Two NMOS devices have the same $V_{GS}$ if and only if their current densities are equal:

$$
\begin{aligned}
\frac{I_{D3}}{(W/L)_3} &= \frac{I_{D5}}{(W/L)_5}\\
\left(\frac{W}{L}\right)_3 &= \frac{I_{D3}}{I_{D5}}\left(\frac{W}{L}\right)_5 = \frac{0.5\ \mathrm{mA}}{1\ \mathrm{mA}}\times239 = 119.5 .
\end{aligned}
$$

### Step 4 — Direct square-law computation (check)

$$
\begin{aligned}
\left(\frac{W}{L}\right)_3 &= \frac{2I_{D3}}{\mu_nC_{ox}V_{ov3}^2}\\
&= \frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2}\\
&= \frac{1\times10^{-3}}{(134\times10^{-6})(0.0625)}\\
&= \frac{1\times10^{-3}}{8.375\times10^{-6}}\\
&= 119 .
\end{aligned}
$$

With $L = 0.5\ \mu\mathrm{m}$: $W_3 = W_4 = 119\times0.5\ \mu\mathrm{m} \approx 60\ \mu\mathrm{m}$.

### Step 5 — What the condition achieves

$M_3$ and $M_5$ now form a current mirror with ratio $(W/L)_5/(W/L)_3 = 2$: the 0.5 mA in $M_3$ is mirrored as 1 mA in $M_5$ (through $M_4$, which reproduces the voltage of X at Y).

**What goes wrong otherwise (numerical illustration).** Suppose $M_3$ were made equal to $M_5$, $(W/L)_3 = 239$. At 0.5 mA its overdrive would be

$$V_{ov3} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(239)}} = \sqrt{0.0312}\ \mathrm{V} = 0.177\ \mathrm{V},$$

so $V_X = V_Y = 0.7 + 0.177 = 0.877$ V with zero input. At that gate voltage $M_5$ would carry only

$$I_{D5} = 1\ \mathrm{mA}\times\left(\frac{0.177\ \mathrm{V}}{0.25\ \mathrm{V}}\right)^2 = 0.5\ \mathrm{mA},$$

half of what $M_6$ supplies. To restore 1 mA, Y would have to rise by $0.25 - 0.177 = 0.073$ V above X. That requires a differential input of about $0.073\ \mathrm{V}/A_1$, a few millivolts for a first-stage gain of about 20. This **systematic offset** is exactly what the condition $V_{GS3} = V_{GS5}$ avoids.

### Result

$$\left(\frac{W}{L}\right)_{3,4} = \frac{I_{D3}}{I_{D5}}\left(\frac{W}{L}\right)_5 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 119,$$

i.e. half of $(W/L)_5$, or $W \approx 60\ \mu\mathrm{m}$ with $L = 0.5\ \mu\mathrm{m}$. This gives $V_{GS3} = V_{GS5} = 0.95$ V.

**Common mistake.** Making $M_3$ equal to $M_5$ ($W/L = 239$) on the grounds that "equal $V_{GS}$ needs equal devices". Equal $V_{GS}$ requires equal *current density*. $M_3$ carries half the current of $M_5$, so it must be half as wide.

**Common mistake.** Matching $V_{GS3}$ to the PMOS $M_6$, or using the PMOS mobility for $M_3$. $M_3$ is an NMOS whose gate voltage drives the NMOS $M_5$ (through $M_4$ and node Y), so the relevant reference is $V_{GS5}$ with $\mu_nC_{ox}$.
