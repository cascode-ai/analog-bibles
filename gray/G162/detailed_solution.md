# Detailed solution - G162

Find the small-signal gain from each supply with the inputs grounded, tracing every path by which the supply can reach the output, then divide the differential gain by it. Body effect is neglected. Two facts organize the analysis. Since $I_{BIAS}$ is ideal, the diode $M_8$ keeps a constant $V_{GS}$, so the gates of $M_5$ and $M_7$ move with $-V_{SS}$ and $v_{gs5}=v_{gs7}=0$. And the p-channel mirror and $M_6$ all have their sources on $V_{DD}$.

### Step 1 — Differential gain

From the two stage gains, with $g_m=2|I_D|/|V_{ov}|$ and $r_o=|V_A|/|I_D|$:

$$
A_{dm}=-g_{m1}\left(r_{o2}\parallel r_{o4}\right)g_{m6}\left(r_{o6}\parallel r_{o7}\right)
=-\frac{2}{V_{ov1}}\,\frac{2}{|V_{ov6}|}\,\frac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|}\,\frac{|V_{A6}|V_{A7}}{|V_{A6}|+V_{A7}}.
$$

### Step 2 — Negative supply: two cancelling paths

With $v_{gs5}=v_{gs7}=0$, $v_{ss}$ reaches the circuit only through $r_{o5}$ and $r_{o7}$.

- **Through $r_{o7}$.** With $v_{gs6}$ held at zero, the output is a divider between $r_{o6}$ (to the ac-grounded $V_{DD}$) and $r_{o7}$ (to $v_{ss}$):

$$
\frac{v_{oa}}{v_{ss}}=\frac{r_{o6}}{r_{o6}+r_{o7}}.
$$

- **Through $r_{o5}$.** With the gates grounded, the tail current changes by $-v_{ss}/r_{o5}$, which acts like a common-mode input to the first stage. Each side changes by $-v_{ss}/(2r_{o5})$; the diode $M_3$ converts this into a rise of the first-stage output (the gate of $M_6$) of $v_{ss}/(2g_{m3}r_{o5})$, since the mirror cancels everything else. The second stage then gives

$$
\frac{v_{ob}}{v_{ss}}=-\frac{g_{m6}\left(r_{o6}\parallel r_{o7}\right)}{2g_{m3}r_{o5}} .
$$

With equal overdrives of $M_3$ and $M_6$, $g_{m6}/g_{m3}=I_{D6}/I_{D3}$; with $I_{D5}=2I_{D3}$ and $|V_{A5}|=|V_{A7}|$,

$$
\frac{g_{m6}}{2g_{m3}r_{o5}}=\frac{I_{D6}}{I_{D5}r_{o5}}=\frac{I_{D7}}{|V_{A5}|}=\frac{1}{r_{o7}}
\ \Rightarrow\ \frac{v_{ob}}{v_{ss}}=-\frac{r_{o6}\parallel r_{o7}}{r_{o7}}=-\frac{r_{o6}}{r_{o6}+r_{o7}} .
$$

The two contributions cancel:

$$
A^-=\frac{v_{oa}+v_{ob}}{v_{ss}}\approx0,\qquad PSRR^-\to\infty .
$$

An exact solution leaves a residual of relative order $V_{ov}/V_A$, so $|PSRR^-|\sim(V_A/V_{ov})^3$, far above $|PSRR^+|$. In practice, mismatch, and body effect if the bodies of $M_1$, $M_2$ are tied to $-V_{SS}$, make the cancellation incomplete.

### Step 3 — Positive supply

With the inputs grounded and the tail current fixed, $M_1$ and $M_2$ act as common-gate devices that hold the currents of $M_3$ and $M_4$ constant. So $v_{sg3}=0$; the gates of $M_3$ and $M_4$ move with $V_{DD}$, and with $v_{sd4}=v_{sd3}=0$ the first-stage output follows $V_{DD}$ exactly. Hence $v_{sg6}=0$: $M_6$'s transconductance is inactive, and the output sees only the divider $r_{o6}$ (to $v_{dd}$) and $r_{o7}$ (to ground):

$$
A^+=\frac{v_o}{v_{dd}}=\frac{r_{o7}}{r_{o6}+r_{o7}}=\frac{V_{A7}}{|V_{A6}|+V_{A7}} .
$$

### Step 4 — PSRR results

$$
|PSRR^+|=\frac{|A_{dm}|}{A^+}=g_{m1}\left(r_{o2}\parallel r_{o4}\right)g_{m6}r_{o6}=\frac{2}{V_{ov1}}\,\frac{2}{|V_{ov6}|}\,\frac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|}\,|V_{A6}|,
$$

with $PSRR^+$ negative in sign (as $A_{dm}$), and $PSRR^-\to\infty$ at low frequency to first order. The roles of the two supplies are swapped relative to the original p-input op amp: now the positive supply couples through the second-stage divider, and the negative supply is rejected by cancellation.
