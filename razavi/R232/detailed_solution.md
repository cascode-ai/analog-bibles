# Detailed solution - R232

**Approach.** With channel-length modulation, a mirror no longer copies its reference current exactly. The output device carries more or less current depending on whether its $V_{DS}$ is larger or smaller than that of the reference device. We recompute every branch current with the factor $(1 + \lambda V_{DS})$, find the voltages these currents produce, and iterate once or twice because the currents and voltages depend on each other. The load current is the small difference $I_T/2 - I_{D5}$, so it is very sensitive to these corrections.

### Step 1 — Model and the $\lambda = 0$ starting point

**Saturation current with channel-length modulation:**

$$I_D = \frac12\mu C_{ox}\frac{W}{L}\left(|V_{GS}| - |V_{TH}|\right)^2\left(1 + \lambda|V_{DS}|\right),$$

with $\lambda = 0.1\ \mathrm{V^{-1}}$ (NMOS) and $0.2\ \mathrm{V^{-1}}$ (PMOS).

**Mirror rule.** Two saturated devices with the same $V_{GS}$ have the same $(|V_{GS}| - |V_{TH}|)^2$, so

$$\frac{I_{out}}{I_{in}} = \frac{(W/L)_{out}}{(W/L)_{in}}\cdot\frac{1 + \lambda|V_{DS,out}|}{1 + \lambda|V_{DS,in}|} .$$

**Parameters:** $(W/L)_N = (W/L)_P = 20$, so $\mu_nC_{ox}(W/L)_N = 2.68\ \mathrm{mA/V^2}$ and $\mu_pC_{ox}(W/L)_P = 0.768\ \mathrm{mA/V^2}$.

**Starting point ($\lambda = 0$).** $I_T = 5I_{REF} = 500\ \mu$A, $I_{D1} = I_{D2} = 250\ \mu$A, $I_{D5} = I_{D6} = 2I_{REF} = 200\ \mu$A, and by KCL at the drain of $M_1$, $I_{D3} = I_{D4} = 250 - 200 = 50\ \mu$A. The node voltages were $V_P \approx 0.137$ V, PMOS reference diode $|V_{GS}| = 1.522$ V and $|V_{GS3}| = 1.161$ V.

### Step 2 — The reference device $M_0$

$M_0$ is diode-connected, so $V_{DS0} = V_{GS0}$, and it carries $I_{REF} = 100\ \mu$A:

$$100\ \mu\mathrm{A} = \tfrac12(2.68\ \mathrm{mA/V^2})(V_{GS0} - 0.7)^2(1 + 0.1V_{GS0}) .$$

Solve by iteration, starting from the $\lambda = 0$ value $V_{GS0} = 0.973$ V:

$$
\begin{aligned}
&V_{GS0} = 0.973: & 1 + 0.1V_{GS0} &= 1.0973, & V_{ov0} &= \sqrt{\frac{2(100\ \mu\mathrm{A})}{(2.68\ \mathrm{mA/V^2})(1.0973)}} = 0.2608\ \mathrm{V},\\
&V_{GS0} = 0.9608: & 1 + 0.1V_{GS0} &= 1.0961, & V_{ov0} &= 0.2609\ \mathrm{V} \;\Rightarrow\; V_{GS0} = 0.961\ \mathrm{V} .
\end{aligned}
$$

So $V_{GS0} = 0.961$ V, and the reference factor is $1 + \lambda_nV_{DS0} = 1.0961$.

### Step 3 — The PMOS reference branch

**$2(W/L)_N$ device.** Same $V_{GS}$ as $M_0$, drain at $V_{DD} - |V_{GS,ref}|$, where $|V_{GS,ref}|$ is the gate–source voltage of the PMOS reference diode:

$$I_{2N} = 2I_{REF}\,\frac{1 + 0.1\,(3 - |V_{GS,ref}|)}{1.0961} .$$

**PMOS reference diode** ($V_{SD} = |V_{GS,ref}|$):

$$I_{2N} = \tfrac12(0.768\ \mathrm{mA/V^2})(|V_{GS,ref}| - 0.8)^2(1 + 0.2|V_{GS,ref}|) .$$

**Iterate**, starting from $|V_{GS,ref}| = 1.522$ V:

| $\lvert V_{GS,ref}\rvert$ used | $I_{2N}$ from the NMOS | $1 + 0.2\lvert V_{GS,ref}\rvert$ | new $\lvert V_{GS,ref}\rvert = 0.8 + \sqrt{2I_{2N}/(0.768\,\mathrm{mA/V^2}\times\text{factor})}$ |
|---|---|---|---|
| 1.522 V | 209.4 μA | 1.3043 | 1.447 V |
| 1.447 V | 210.8 μA | 1.2893 | 1.453 V |
| 1.452 V | 210.7 μA | 1.2904 | 1.452 V |

Result: $I_{2N} = 210.7\ \mu$A and $|V_{GS,ref}| = 1.452$ V. The $2(W/L)_N$ device has $V_{DS} = 1.55$ V, larger than $M_0$'s 0.96 V, so it carries about 5 % more than $2I_{REF}$.

### Step 4 — The tail current

The tail device has the same $V_{GS}$ as $M_0$ but $V_{DS} = V_P$:

$$I_T = 5I_{REF}\,\frac{1 + 0.1V_P}{1 + 0.1V_{GS0}} = 500\ \mu\mathrm{A}\times\frac{1 + 0.1V_P}{1.0961} .$$

$I_T$ depends only weakly on $V_P$ (a 0.1-V error in $V_P$ changes $I_T$ by 1 %). Start with the $\lambda = 0$ value $V_P = 0.137$ V:

$$I_T = 500\ \mu\mathrm{A}\times\frac{1.0137}{1.0961} = 462.4\ \mu\mathrm{A}, \qquad \frac{I_T}{2} = 231.2\ \mu\mathrm{A} .$$

**Why it falls below 500 μA:** the tail's $V_{DS}$ (about 0.14–0.18 V) is much smaller than $M_0$'s $V_{DS} = V_{GS0} = 0.96$ V, so channel-length modulation gives the tail less current than its reference.

### Step 5 — The load current $I_{D3}$ (first pass)

**$M_5$.** It has the same $V_{SG}$ as the reference diode, but its drain is the drain of $M_3$, so $V_{SD5} = V_{DD} - V_{D3} = |V_{GS3}|$:

$$I_{D5} = I_{2N}\,\frac{1 + 0.2|V_{GS3}|}{1 + 0.2|V_{GS,ref}|} = 210.7\ \mu\mathrm{A}\times\frac{1 + 0.2|V_{GS3}|}{1.2904} .$$

**$M_3$** (diode, $V_{SD3} = |V_{GS3}|$):

$$I_{D3} = \tfrac12(0.768\ \mathrm{mA/V^2})(|V_{GS3}| - 0.8)^2(1 + 0.2|V_{GS3}|) .$$

**KCL at the drain of $M_1$:** $I_{D3} + I_{D5} = I_T/2 = 231.2\ \mu$A. Solving this one-variable equation numerically gives $|V_{GS3}| = 1.066$ V, with

$$I_{D5} = 210.7\times\frac{1.2133}{1.2904} = 198.1\ \mu\mathrm{A}, \qquad I_{D3} = 231.2 - 198.1 = 33.1\ \mu\mathrm{A} .$$

$M_5$ now has $V_{SD5} = 1.07$ V, less than the reference diode's 1.45 V, so it delivers *less* than $I_{2N}$, about 198 μA.

### Step 6 — Updating $V_P$ with $\lambda$ and the body effect

$M_1$ carries $I_T/2$ with $V_{DS1} = V_{D3} - V_P$. With $V_{D3} = 3 - 1.066 = 1.934$ V and $V_P \approx 0.18$ V, $V_{DS1} \approx 1.75$ V:

$$V_{ov1} = \sqrt{\frac{2(231.2\ \mu\mathrm{A})}{(2.68\ \mathrm{mA/V^2})(1 + 0.1\times1.75)}} = \sqrt{\frac{462.4\ \mu\mathrm{A}}{3.149\ \mathrm{mA/V^2}}} = 0.383\ \mathrm{V} .$$

The $(1 + \lambda V_{DS1}) = 1.175$ factor lets $M_1$ carry its current with less overdrive than before (0.383 V instead of 0.432 V), so $V_P$ rises. With $V_P = 1.3 - V_{TH1} - V_{ov1}$ and $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - 0.9487)$, set $u = \sqrt{0.9 + V_P}$:

$$u^2 + 0.45u - (0.9 + 1.3 - 0.7 + 0.4269 - 0.383) = u^2 + 0.45u - 1.5439 = 0,$$

$$u = \frac{-0.45 + \sqrt{0.2025 + 6.1756}}{2} = 1.0378, \qquad V_P = u^2 - 0.9 = 0.177\ \mathrm{V} .$$

($V_{TH1} = 0.740$ V.)

### Step 7 — Second pass (convergence)

With $V_P = 0.177$ V:

$$I_T = 500\ \mu\mathrm{A}\times\frac{1 + 0.0177}{1.0961} = 464.2\ \mu\mathrm{A}, \qquad \frac{I_T}{2} = 232.1\ \mu\mathrm{A} .$$

Solving the KCL of Step 5 again gives $|V_{GS3}| = 1.070$ V. Check the solution:

$$
\begin{aligned}
I_{D5} &= 210.7\times\frac{1 + 0.2(1.070)}{1.2904} = 210.7\times\frac{1.2139}{1.2904} = 198.2\ \mu\mathrm{A},\\
I_{D3} &= 0.384\ \mathrm{mA/V^2}\times(0.2696\ \mathrm{V})^2\times1.2139 = 33.9\ \mu\mathrm{A},\\
I_{D3} + I_{D5} &= 232.1\ \mu\mathrm{A} = I_T/2\ \checkmark
\end{aligned}
$$

Recomputing $V_P$ with $V_{DS1} = (3 - 1.070) - 0.176 = 1.754$ V gives $V_P = 0.176$ V, unchanged. The iteration has converged:

$$I_T = 464\ \mu\mathrm{A}, \qquad I_{D3} = I_{D4} = 33.9\ \mu\mathrm{A}, \qquad V_{D3} = V_{D4} = 1.93\ \mathrm{V} .$$

### Step 8 — Interpretation and a caveat

- $I_T$ is 7 % below its $\lambda = 0$ value, and the half-current 232 μA is 7 % below 250 μA.
- $I_{D5}$ is only 1 % below 200 μA (the 5 % gain of the $2(W/L)_N$ device and the 6 % loss of $M_5$ nearly cancel).
- The load current is the **difference** of these two, $232 - 198 = 34\ \mu$A. A 7 % error in the larger term becomes a 32 % error in the difference. Designs in which a current source takes most of the pair current (to raise the load resistance) are therefore very sensitive to mirror errors.

**Caveat.** As with $\lambda = 0$, the tail's $V_{DS} = V_P = 0.18$ V is below its overdrive (0.26 V), so with these sizes the tail would really be in the triode region. Accounting for that gives $I_T \approx 0.43$ mA and only about 19 μA in $M_3$/$M_4$. The values above follow the problem's instruction to treat all transistors as saturated.

### Result

$$I_T \approx 464\ \mu\mathrm{A} \approx 0.46\ \mathrm{mA}\ (\text{instead of } 500\ \mu\mathrm{A}), \qquad I_{D3} = I_{D4} \approx 34\ \mu\mathrm{A}\ (\text{instead of } 50\ \mu\mathrm{A}) .$$

- The tail runs at $V_{DS} = V_P \approx 0.18$ V while $M_0$ runs at $V_{DS} = V_{GS0} = 0.96$ V: $I_T = 500\times\frac{1 + 0.1(0.18)}{1 + 0.1(0.96)} \approx 464\ \mu$A.
- The $2(W/L)_N$ device gives $\approx 211\ \mu$A to the PMOS reference diode ($|V_{GS}| \approx 1.45$ V); $M_5$/$M_6$, at $V_{SD} \approx 1.07$ V, deliver $\approx 198\ \mu$A.
- Load current: $232 - 198 \approx 34\ \mu$A, about 30 % less than the ideal 50 μA (drains at about 1.93 V).

**Common mistake.** Applying the correction in the wrong direction and getting $I_T > 500\ \mu$A. The tail's $V_{DS}$ (about 0.18 V) is far *smaller* than the reference device's $V_{DS} = V_{GS0} \approx 0.96$ V, so the factor $(1 + \lambda V_{DS})$ is smaller for the tail and it carries *less* current.

**Common mistake.** Correcting the tail but not the PMOS mirror, or correcting it only halfway. If $M_5$ is assumed to carry the full 210.7 μA of the reference diode, the load current comes out as $232 - 211 = 21\ \mu$A. $M_5$ has a smaller $V_{SD}$ (1.07 V) than the diode (1.45 V), which brings its current back to about 198 μA.

**Common mistake.** Leaving the load current at 50 μA "because the λ corrections are only a few percent." The load current is a small difference of two large currents, so few-percent errors in the large currents become a 30 % error in the load current.
