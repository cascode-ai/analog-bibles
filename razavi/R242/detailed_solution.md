# Detailed solution - R242

**Approach.** CMRR is the ratio of the differential gain to the common-mode (CM) gain, $|A_{DM}/A_{CM}|$. Even with perfect matching, the single-ended output of this five-transistor amplifier responds to a CM input: the CM input changes the tail current through the finite output resistance of $M_5$, and the output follows node F. We compute $A_{DM}$ with the usual $G_mR_{out}$ argument and $A_{CM}$ by merging the symmetric halves. The body effect of $M_1$, $M_2$ is included because the data provide $\gamma$, and the result without it is also given.

### Step 1 — Bias and small-signal parameters

All devices are $50/0.5$ ($W/L = 100$). $M_5$ carries 0.5 mA and each branch carries 0.25 mA.

**Transconductances** ($g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$):

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},\\
g_{m3} = g_{m4} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 1.39\ \mathrm{mS} .
\end{aligned}
$$

**Output resistances** ($r_O = 1/(\lambda I_D)$):

$$
\begin{aligned}
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} = r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
R_{SS} = r_{O5} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .
\end{aligned}
$$

Note that $r_{O5}$ uses the NMOS $\lambda$ and the **full** tail current of 0.5 mA.

**Body effect of $M_1$, $M_2$.** Their overdrive is $V_{ov1} = \sqrt{2(0.25\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.193$ V. Node P satisfies $V_P = 1.5 - 0.193 - V_{TH}(V_P)$ with $V_{TH} = 0.7 + 0.45(\sqrt{0.9 + V_P} - 0.9487)$. With $u = \sqrt{0.9 + V_P}$:

$$u^2 + 0.45u - (0.9 + 1.5 - 0.193 - 0.7 + 0.4269) = u^2 + 0.45u - 1.9337 = 0 \;\Rightarrow\; u = \frac{-0.45 + \sqrt{0.2025 + 7.7350}}{2} = 1.184,$$

$$V_P = u^2 - 0.9 = 0.501\ \mathrm{V} .$$

The body-effect coefficient and transconductance are

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_P}} = \frac{0.45}{2(1.184)} = 0.190, \qquad g_{mb1} = \eta g_{m1} = 0.190\times2.59\ \mathrm{mS} = 0.49\ \mathrm{mS} .$$

### Step 2 — Differential gain

For a differential input, P is (to a very good approximation) an ac ground. $M_1$'s signal current flows into the diode $M_3$, $M_4$ mirrors it to the output, and it adds to $M_2$'s opposite signal current. The short-circuit transconductance is therefore $G_m = g_{m1}$. The output resistance of the amplifier is $R_{out} \approx r_{O2}\|r_{O4}$. So

$$A_{DM} \approx g_{m1}(r_{O2}\|r_{O4}) = (2.59\ \mathrm{mS})\left(\frac{40\times20}{40 + 20}\ \mathrm{k}\Omega\right) = (2.59\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) = 34.5 .$$

### Step 3 — Common-mode gain: merging the halves

Apply the same small change $v_{CM}$ to both gates. Because the circuit is perfectly matched, the two branches carry equal currents. $M_3$ and $M_4$ then have equal $V_{SG}$ and equal currents, hence equal $V_{SD}$: **$V_{out} = V_F$ for a CM input**. Nodes F and out can be tied together without changing anything. Then:

- $M_1$ and $M_2$ are in parallel: one device with transconductance $2g_{m1}$, body transconductance $2g_{mb1}$ and output resistance $r_{O1}/2$.
- $M_3$ and $M_4$ are in parallel and diode-connected: a load of $\frac{1}{2g_{m3}}\big\|\frac{r_{O3}}{2}$ to ac ground.
- $M_5$ (fixed gate) is the resistance $R_{SS} = r_{O5}$ from P to ground.

<!-- diagram: diagram-01.cir -->

The result is a common-source stage with source degeneration $R_{SS}$.

**Current in the merged input device.** Neglect $r_{O1}/2$, which is far larger than the load $1/(2g_{m3}) = 0.36\ \mathrm{k}\Omega$. With $v_{gs} = v_{CM} - v_P$ and $v_{bs} = -v_P$:

$$i = 2g_{m1}(v_{CM} - v_P) - 2g_{mb1}v_P .$$

**KCL at P:** $i = v_P/R_{SS}$, so $v_P = iR_{SS}$. Substitute:

$$
\begin{aligned}
i &= 2g_{m1}v_{CM} - 2(g_{m1} + g_{mb1})R_{SS}\,i,\\
i\left[1 + 2(g_{m1} + g_{mb1})R_{SS}\right] &= 2g_{m1}v_{CM},\\
i &= \frac{2g_{m1}}{1 + 2(g_{m1} + g_{mb1})R_{SS}}\,v_{CM} .
\end{aligned}
$$

**Output.** This current is drawn through the merged diode load, $\approx 1/(2g_{m3})$ (since $r_{O3}/2 = 10\ \mathrm{k}\Omega \gg 0.36\ \mathrm{k}\Omega$):

$$A_{CM} = \frac{v_{out}}{v_{CM}} = -\frac{i}{2g_{m3}\,v_{CM}} = -\frac{g_{m1}/g_{m3}}{1 + 2(g_{m1} + g_{mb1})R_{SS}} .$$

**Numbers.**

$$
\begin{aligned}
2g_{m1}R_{SS} &= 2(2.59\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 103.5,\\
2(g_{m1} + g_{mb1})R_{SS} &= 2(3.08\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 123.2,\\
\frac{g_{m1}}{g_{m3}} &= \frac{2.59}{1.39} = 1.87 .
\end{aligned}
$$

$$A_{CM} = -\frac{1.87}{1 + 123.2} = -0.0150 \quad(\text{with body effect}), \qquad A_{CM} = -\frac{1.87}{1 + 103.5} = -0.0179 \quad(\text{without}).$$

**Why it is not zero.** In a fully differential output, equal changes in the two branches would cancel. Here the output is single-ended and simply follows node F. A CM input changes the tail current (because $R_{SS}$ is finite), the change flows into the diode $M_3$, and F moves. The only thing keeping $A_{CM}$ small is the strong degeneration $2g_{m1}R_{SS} \approx 100$.

### Step 4 — CMRR

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM}}\right| = \frac{g_{m1}(r_{O1}\|r_{O3})}{\dfrac{g_{m1}/g_{m3}}{1 + 2(g_{m1} + g_{mb1})R_{SS}}} = \left[1 + 2(g_{m1} + g_{mb1})r_{O5}\right]g_{m3}(r_{O1}\|r_{O3}) .$$

The second factor is

$$g_{m3}(r_{O1}\|r_{O3}) = (1.39\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) = 18.5 .$$

**With body effect:**

$$\mathrm{CMRR} = 124.2\times18.5 = 2.3\times10^3, \qquad 20\log_{10}(2295) = 67.2\ \mathrm{dB} .$$

**Without body effect** ($g_{mb1} = 0$):

$$\mathrm{CMRR} = (1 + 2g_{m1}r_{O5})\,g_{m3}(r_{O1}\|r_{O3}) = 104.5\times18.5 = 1.93\times10^3, \qquad 65.7\ \mathrm{dB} .$$

**Check with an exact nodal analysis.** Solving the full small-signal circuit (all $r_O$ included) gives $A_{DM} = 33.9$ and $A_{CM} = -0.0144$ (with body effect) or $-0.0171$ (without), i.e. CMRR ≈ $2.36\times10^3$ (67.4 dB) or $1.99\times10^3$ (66.0 dB), within about 3 % of the simple formulas.

### Result

$$\mathrm{CMRR} \approx \left[1 + 2g_{m1,2}r_{O5}\right]g_{m3,4}\,(r_{O1,2}\|r_{O3,4}) = 104.5\times18.5 \approx 1.9\times10^3\ (\approx 66\ \mathrm{dB})$$

neglecting body effect. Including the body effect of $M_1$, $M_2$ ($V_P \approx 0.50$ V, $g_{mb1} \approx 0.19g_{m1}$) replaces $g_{m1}$ by $g_{m1} + g_{mb1}$ in the tail term, giving $124\times18.5 \approx 2.3\times10^3$ (≈ 67 dB). The ingredients are $A_{DM} \approx g_{m1}(r_{O1}\|r_{O3}) = 34.5$ and $A_{CM} \approx -\dfrac{g_{m1}/g_{m3}}{1 + 2(g_{m1} + g_{mb1})r_{O5}}$, with $g_{m1} = 2.59$ mS, $g_{m3} = 1.39$ mS, $r_{O1}\|r_{O3} = 13.3\ \mathrm{k}\Omega$ and $r_{O5} = 20\ \mathrm{k}\Omega$.

**Common mistake.** Claiming that the CMRR is infinite because the circuit is perfectly matched. Matching makes CM-to-differential conversion vanish in a *fully differential* circuit. This amplifier has a single-ended output that follows node F, and F moves whenever the tail current changes, i.e. whenever $r_{O5}$ is finite.

**Common mistake.** Computing $r_{O5}$ with the per-branch current (0.25 mA, giving 40 kΩ) or with the PMOS $\lambda$. $M_5$ is an NMOS carrying the full 0.5 mA, so $r_{O5} = 1/(0.1\times0.5\ \mathrm{mA}) = 20\ \mathrm{k}\Omega$.

**Common mistake.** Writing the degeneration factor as $g_mR_{SS}$ or $g_mR_{SS}/2$ instead of $1 + 2g_{m1}R_{SS}$. With the halves merged, the input device has transconductance $2g_{m1}$ and sees the full $R_{SS}$ in its source, so the factor is $1 + 2g_{m1}R_{SS}$ (plus $2g_{mb1}R_{SS}$ with body effect).
