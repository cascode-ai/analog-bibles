# Detailed solution - R609

**Approach.** The loop formed by $A_1$ and $M_3$ forces the drain of $M_1$ to follow $A_1$'s + input *including* $A_1$'s noise, so the noise appears as a fluctuation of $V_{DS1}$. A triode transistor's current depends on $V_{DS}$ as well as on $V_{GS}$, so this produces an output noise current; dividing it by the transconductance refers it to the input, and the two independent sides add in power.

### Step 1 — How the amplifier noise reaches the transistor

Model $A_1$'s noise as a source $V_{n1}$ in series with its + input. With a large loop gain ($A_1$ drives the gate of $M_3$, whose source is X), the − input equals the + input:

$$V_X = V_b + V_{n1}.$$

So $V_{DS1} = V_b + V_{n1}$: the amplifier's noise directly modulates $V_{DS1}$, and likewise $V_Y = V_b + V_{n2}$. $A_1$'s input draws no current, so $I_{D3} = I_{D1}$ and the output is $I_{D3} - I_{D4} = I_{D1} - I_{D2}$.

### Step 2 — Sensitivities of a triode transistor

In the triode region,

$$I_{D1} = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS1} - V_{TH})V_{DS1} - \tfrac12V_{DS1}^2\right].$$

At $V_{DS1} = V_b$ and $V_{GS1} = V_{GS}$, the sensitivity to the gate (the input) is

$$g_m = \frac{\partial I_{D1}}{\partial V_{GS1}} = \mu_nC_{ox}\frac{W}{L}\,V_{DS1} = \mu_nC_{ox}\frac{W}{L}\,V_b ,$$

and the sensitivity to the drain is the channel conductance

$$g_{ds} = \frac{\partial I_{D1}}{\partial V_{DS1}} = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS} - V_{TH}) - V_{DS1}\right] = \mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH} - V_b) = \frac{1}{R_{on}},$$

positive because triode operation requires $V_b < V_{GS} - V_{TH}$.

### Step 3 — Small-signal model of one side

One side is a current source $g_mv_{in1}$ in parallel with $g_{ds}$ from X to ground, with X forced by the loop to $v_{n1}$:

<!-- diagram: diagram-01.cir -->

$$\Delta I_{D1} = g_m\,v_{in1} + g_{ds}\,v_{n1}, \qquad \Delta I_{D2} = g_m\,v_{in2} + g_{ds}\,v_{n2},$$

so the output changes by

$$\Delta(I_{D1} - I_{D2}) = g_m\,(v_{in1} - v_{in2}) + g_{ds}\,(v_{n1} - v_{n2}).$$

### Step 4 — Refer the noise to the input

The input-referred noise is the differential input giving the same output:

$$
\begin{aligned}
g_m\,v_{n,in} &= g_{ds}\,(v_{n1} - v_{n2})\\
v_{n,in} &= \frac{g_{ds}}{g_m}\,(v_{n1} - v_{n2}),
\end{aligned}
$$

with

$$\frac{g_{ds}}{g_m} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH} - V_b)}{\mu_nC_{ox}(W/L)\,V_b} = \frac{V_{GS} - V_{TH} - V_b}{V_b}.$$

$v_{n1}$ and $v_{n2}$ are uncorrelated with equal mean square $\overline{V_n^2}$, so their difference has mean square $2\overline{V_n^2}$:

$$\overline{V_{n,in}^2} = \left(\frac{g_{ds}}{g_m}\right)^2\cdot2\overline{V_n^2} = 2\,\overline{V_n^2}\left(\frac{V_{GS} - V_{TH} - V_b}{V_b}\right)^2,$$

$$V_{n,in} = \sqrt2\,V_n\,\frac{V_{GS} - V_{TH} - V_b}{V_b},$$

where $V_{GS} - V_{TH}$ is the overdrive of $M_1$, $M_2$ at the input common-mode level and $V_b = V_{DS1} = V_{DS2}$.

### Step 5 — How large is it?

Triode (and linear) operation normally uses $V_b \ll V_{GS} - V_{TH}$, so the factor $(V_{GS} - V_{TH} - V_b)/V_b \approx (V_{GS} - V_{TH})/V_b$ is much larger than one and the auxiliary amplifiers' noise is **amplified**. For example, with $V_{GS} - V_{TH} = 1$ V and $V_b = 0.2$ V:

$$\frac{1 - 0.2}{0.2} = 4, \qquad V_{n,in} = \sqrt2\times4\,V_n \approx 5.7\,V_n .$$

At small $V_{DS}$ the triode device is a voltage-controlled resistor whose current depends strongly on $V_{DS}$ ($g_{ds} = 1/R_{on}$) and only weakly on $V_{GS}$ ($g_m \propto V_{DS}$), so the amplifiers holding $V_{DS}$ constant must be very quiet: a main drawback of this linearization scheme.

### Result

$$\overline{V_{n,in}^2} = 2\,\overline{V_n^2}\left(\frac{V_{GS} - V_{TH} - V_b}{V_b}\right)^2 \quad\Longleftrightarrow\quad V_{n,in} = \sqrt2\,V_n\,\frac{V_{GS} - V_{TH} - V_b}{V_b},$$

equivalently $2\overline{V_n^2}\,(g_{ds}/g_m)^2$ with $g_m = \mu_nC_{ox}(W/L)V_b$ and $g_{ds} = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH} - V_b) = 1/R_{on}$. Since usually $V_{GS} - V_{TH} \gg V_b$, the noise of $A_1$ and $A_2$ is amplified (e.g. about $5.7V_n$ for $V_{GS} - V_{TH} = 1$ V and $V_b = 0.2$ V).

**Common mistake.** Assuming the amplifiers' noise appears directly at the input ($V_{n,in} = V_n$ or $\sqrt2V_n$), or that the loop rejects it. The loop *imposes* $V_b + V_{n1}$ on the drain of $M_1$, and the triode device converts it into current through the large $g_{ds}$, referred to the input through the small $g_m$.

**Common mistake.** Using saturation-region formulas, e.g. $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$ and $g_{ds} \approx 0$; in triode the roles are reversed. Forgetting the $\sqrt2$ (two independent amplifiers feeding a differential output) is another frequent slip.
