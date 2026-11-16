# Detailed solution - R260

**Approach.** Trace the dc voltages around the circuit to find the drain–source voltage of $M_2$. Then compare the currents of $M_1$ and $M_2$, which have the same gate–source voltage but different drain–source voltages, using the square law with channel-length modulation, $I_D = \tfrac{\beta}{2}(V_{GS} - V_{TH})^2(1 + \lambda V_{DS})$.

### Step 1 — Reading the circuit

From the figure:

- $I_{REF}$ flows from $V_{DD}$ into a stack of two **diode-connected** transistors: $M_0$ on top (gate and drain tied together, at the node labelled $V_{b1}$) and $M_1$ below it (gate and drain tied together at X, source grounded). So
$$V_{b1} = V_{GS0} + V_{GS1}, \qquad V_X = V_{GS1}.$$
- $M_2$ has its gate at X, so $V_{GS2} = V_{GS1}$: it is the mirror copy of $M_1$. Its source is grounded and its drain feeds the source of the cascode $M_3$.
- $M_4$ is a **source follower**: drain at $V_{DD}$, gate at $V_{b1}$, source loaded by the small current $I_1$. Its source drives the gate of $M_3$, so
$$V_{G3} = V_{b1} - V_{GS4}.$$
- $M_3$ is the output cascode: $I_{out}$ flows into its drain, and it passes the same current to $M_2$. So $I_{out} = I_{D2}$.

### Step 2 — The drain–source voltage of $M_2$

The drain of $M_2$ is the source of $M_3$, one $V_{GS3}$ below $M_3$'s gate:

$$V_{DS2} = V_{G3} - V_{GS3} = V_{GS0} + V_{GS1} - V_{GS4} - V_{GS3}.$$

With $\gamma = 0$ there is no body effect, so $M_0$ and $M_3$ have the same threshold even though their sources are not grounded. They are identical and carry nearly the same current ($I_{REF}$ and $I_{out} \approx I_{REF}$), so $V_{GS3} \approx V_{GS0}$, and the expression simplifies to

$$V_{DS2} \approx V_{GS1} - V_{GS4}.$$

### Step 3 — Why $M_2$ sits at the edge of saturation

$M_4$ is wide and carries only the small current $I_1$, so its overdrive is tiny:

$$V_{GS4} = V_{TH} + \sqrt{\frac{2I_1}{\mu_nC_{ox}(W/L)_4}} \approx V_{TH}.$$

Therefore

$$V_{DS2} \approx V_{GS1} - V_{TH} = V_{ov1} = V_{ov2},$$

where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive. $M_2$'s drain–source voltage equals its own overdrive: **$M_2$ is at the edge of saturation**, as intended. This keeps the minimum output voltage as low as possible, $V_{ov2} + V_{ov3}$ instead of $V_{TH} + 2V_{ov}$ for the standard cascode mirror.

### Step 4 — Comparing the currents of $M_1$ and $M_2$

Both transistors have the same $V_{GS} = V_{GS1}$ and are saturated (just barely, in the case of $M_2$). With $\lambda \ne 0$:

$$
\begin{aligned}
I_{REF} = I_{D1} &= \frac{\beta}{2}(V_{GS1} - V_{TH})^2(1 + \lambda V_{DS1}), \qquad V_{DS1} = V_{GS1} \ \text{(diode)},\\
I_{out} = I_{D2} &= \frac{\beta}{2}(V_{GS1} - V_{TH})^2(1 + \lambda V_{DS2}), \qquad V_{DS2} \approx V_{GS1} - V_{GS4}.
\end{aligned}
$$

The common factor $\tfrac{\beta}{2}(V_{GS1} - V_{TH})^2$ cancels in the ratio:

$$\frac{I_{out}}{I_{REF}} = \frac{1 + \lambda V_{DS2}}{1 + \lambda V_{DS1}} = \frac{1 + \lambda(V_{GS1} - V_{GS4})}{1 + \lambda V_{GS1}} .$$

The relative error:

$$
\begin{aligned}
\frac{I_{out} - I_{REF}}{I_{REF}} &= \frac{1 + \lambda V_{GS1} - \lambda V_{GS4}}{1 + \lambda V_{GS1}} - 1\\
&= \frac{1 + \lambda V_{GS1} - \lambda V_{GS4} - 1 - \lambda V_{GS1}}{1 + \lambda V_{GS1}}\\
&= -\,\frac{\lambda V_{GS4}}{1 + \lambda V_{GS1}} \approx -\,\frac{\lambda V_{TH}}{1 + \lambda V_{GS1}} \approx -\lambda V_{TH}.
\end{aligned}
$$

**Why the error exists.** The cascode $M_3$ makes $I_{out}$ insensitive to the *output* voltage, but it holds $M_2$'s drain at about $V_{ov}$, while $M_1$'s drain sits at $V_{GS1} = V_{TH} + V_{ov}$. The two drains differ by about one threshold voltage. Channel-length modulation turns that $V_{DS}$ difference into a current difference, and $M_2$, with the smaller $V_{DS}$, carries less current.

### Step 5 — Numerical estimate

With $\lambda = 0.1\ \mathrm{V^{-1}}$, $V_{GS4} \approx V_{TH} = 0.7$ V, and a typical $V_{GS1} \approx 0.9$ V:

$$\frac{I_{out} - I_{REF}}{I_{REF}} \approx -\frac{(0.1\ \mathrm{V^{-1}})(0.7\ \mathrm{V})}{1 + (0.1\ \mathrm{V^{-1}})(0.9\ \mathrm{V})} = -\frac{0.070}{1.09} = -6.4\% .$$

So $I_{out}$ is about **6–7 % below $I_{REF}$**.

### Step 6 — Check with a concrete design

Take $I_{REF} = 100\ \mu\mathrm{A}$, $M_0$–$M_3$ with $W/L = 20/0.5$, so $\beta = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}$, and $M_4$ with $W/L = 200/0.5$ ($\beta_4 = 53.6\ \mathrm{mA/V^2}$) at $I_1 = 5\ \mu\mathrm{A}$. Let $V_{DD} = 3$ V and let the output sit at 2 V.

**$M_1$ (diode):** solve $100\ \mu\mathrm{A} = \tfrac12(5.36\ \mathrm{mA/V^2})V_{ov}^2(1 + 0.1V_{GS1})$:

$$V_{ov1} = 0.185\ \mathrm{V}, \quad V_{GS1} = 0.885\ \mathrm{V}, \quad \text{check: } 2.68\ \mathrm{mA/V^2}\times(0.185)^2\times1.0885 = 100\ \mu\mathrm{A}. \ \checkmark$$

**$M_0$** is identical, also diode-connected and at the same current (γ = 0), so $V_{GS0} = 0.885$ V and $V_{b1} = 1.770$ V.

**$M_4$:** its drain–source voltage is $V_{DD} - V_{G3} \approx 3 - 1.06 = 1.94$ V, so its overdrive is

$$V_{ov4} = \sqrt{\frac{2(5\ \mu\mathrm{A})}{(53.6\ \mathrm{mA/V^2})(1 + 0.1\times1.94)}} = 0.0125\ \mathrm{V},$$

so $V_{GS4} = 0.7125$ V and $V_{G3} = 1.770 - 0.7125 = 1.058$ V.

**$M_2$ and $M_3$:** solving $I_{D3} = I_{D2}$ numerically gives $V_{DS2} = 0.186$ V (compared with $V_{ov2} = 0.185$ V, so right at the edge) and $V_{GS3} = 0.872$ V. Then

$$I_{out} = \tfrac12(5.36\ \mathrm{mA/V^2})(0.185\ \mathrm{V})^2(1 + 0.1\times0.186) = 93.6\ \mu\mathrm{A},$$

which is **−6.4 %**, in agreement with the estimate. The formula of Step 4 gives $-(0.1)(0.7125)/1.0885 = -6.5\%$. The small difference arises because $V_{GS3}$ is slightly smaller than $V_{GS0}$ ($M_3$ carries less current and has a larger $V_{DS}$). Changing the output voltage from 1.5 V to 3 V moves the result only between −6.5 % and −6.4 %.

### Result

$$I_{out} \approx I_{REF}\,\frac{1 + \lambda(V_{GS1} - V_{GS4})}{1 + \lambda V_{GS1}}, \qquad \frac{I_{out} - I_{REF}}{I_{REF}} \approx -\frac{\lambda V_{GS4}}{1 + \lambda V_{GS1}} \approx -\lambda V_{TH}.$$

Here $V_{DS2} \approx V_{GS1} - V_{GS4} \approx V_{GS1} - V_{TH}$ (edge of saturation), while $V_{DS1} = V_{GS1}$. For $\lambda = 0.1\ \mathrm{V^{-1}}$, **$I_{out}$ is about 6–7 % lower than $I_{REF}$** (−6.4 % for $V_{GS1} \approx 0.9$ V).

**Common mistake.** Claiming that the cascode removes the channel-length-modulation error completely. A cascode makes $I_{out}$ independent of the *output* voltage, but the accuracy of the copy is set by how well $V_{DS2}$ matches $V_{DS1}$. Here they differ by about $V_{TH}$, so a systematic error of about $\lambda V_{TH}$ remains.

**Common mistake.** Getting the sign wrong, i.e. predicting $I_{out} > I_{REF}$. $M_2$ has the *smaller* drain–source voltage (about $V_{ov}$ against $V_{GS}$), so with $\lambda > 0$ it carries the *smaller* current.

**Common mistake.** Estimating the mismatch from differences in gate–source voltages, which gives errors of tens of percent. $M_1$ and $M_2$ have exactly the same $V_{GS}$. The only difference is in $V_{DS}$, and it enters weakly, through $\lambda$.
