# Detailed solution - R609

**Approach.** The feedback loop formed by $A_1$ and $M_3$ forces the drain of $M_1$ to follow the voltage at $A_1$'s + input *including* $A_1$'s noise, so the noise appears as a fluctuation of $V_{DS1}$. A triode transistor's current depends on $V_{DS}$ as well as on $V_{GS}$, so this fluctuation produces an output noise current. Dividing that current by the transistor's transconductance refers it to the input; the two sides are independent and add in power.

### Step 1 — How the amplifier noise reaches the transistor

Model $A_1$'s noise as a voltage source $V_{n1}$ in series with its + input. With a large loop gain, the loop ($A_1$ driving the gate of $M_3$, whose source is X) makes the − input equal to the + input:

$$V_X = V_b + V_{n1}.$$

So the drain–source voltage of $M_1$ is $V_{DS1} = V_b + V_{n1}$: the amplifier's noise directly modulates $V_{DS1}$. Likewise $V_Y = V_b + V_{n2}$ for $M_2$.

The loop supplies through $M_3$ whatever current $M_1$ draws ($A_1$'s input takes no current), so the output current of this side is $I_{D3} = I_{D1}$, and the circuit's output is $I_{D3} - I_{D4} = I_{D1} - I_{D2}$.

### Step 2 — Sensitivities of a triode transistor

In the triode region the square-law model gives

$$I_{D1} = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS1} - V_{TH})V_{DS1} - \tfrac12V_{DS1}^2\right].$$

Its two partial derivatives, evaluated at $V_{DS1} = V_b$ and the bias $V_{GS1} = V_{GS}$, are:

**Transconductance** (sensitivity to the gate voltage, i.e. to the input):

$$g_m = \frac{\partial I_{D1}}{\partial V_{GS1}} = \mu_nC_{ox}\frac{W}{L}\,V_{DS1} = \mu_nC_{ox}\frac{W}{L}\,V_b .$$

**Channel conductance** (sensitivity to the drain voltage):

$$g_{ds} = \frac{\partial I_{D1}}{\partial V_{DS1}} = \mu_nC_{ox}\frac{W}{L}\left[(V_{GS} - V_{TH}) - V_{DS1}\right] = \mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH} - V_b) = \frac{1}{R_{on}} .$$

Triode operation requires $V_b < V_{GS} - V_{TH}$, so $g_{ds} > 0$.

### Step 3 — Small-signal model of one side

Linearizing, one side behaves as a current source $g_mv_{in1}$ in parallel with the conductance $g_{ds}$ from X to ground, with X forced by the loop to $v_{n1}$:

<!-- diagram: diagram-01.cir -->

$$\Delta I_{D1} = g_m\,v_{in1} + g_{ds}\,v_{n1}, \qquad \Delta I_{D2} = g_m\,v_{in2} + g_{ds}\,v_{n2}.$$

The output change is

$$\Delta(I_{D1} - I_{D2}) = g_m\,(v_{in1} - v_{in2}) + g_{ds}\,(v_{n1} - v_{n2}).$$

### Step 4 — Refer the noise to the input

The input-referred noise is the differential input voltage that would produce the same output:

$$
\begin{aligned}
g_m\,v_{n,in} &= g_{ds}\,(v_{n1} - v_{n2})\\
v_{n,in} &= \frac{g_{ds}}{g_m}\,(v_{n1} - v_{n2}).
\end{aligned}
$$

The ratio of the two sensitivities:

$$\frac{g_{ds}}{g_m} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH} - V_b)}{\mu_nC_{ox}(W/L)\,V_b} = \frac{V_{GS} - V_{TH} - V_b}{V_b}.$$

$v_{n1}$ and $v_{n2}$ are uncorrelated with equal mean-square value $\overline{V_n^2}$, so the mean square of their difference is $2\overline{V_n^2}$:

$$\overline{V_{n,in}^2} = \left(\frac{g_{ds}}{g_m}\right)^2\cdot2\overline{V_n^2} = 2\,\overline{V_n^2}\left(\frac{V_{GS} - V_{TH} - V_b}{V_b}\right)^2,$$

$$V_{n,in} = \sqrt2\,V_n\,\frac{V_{GS} - V_{TH} - V_b}{V_b}.$$

Here $V_{GS} - V_{TH}$ is the overdrive of $M_1$, $M_2$ at the input common-mode level and $V_b = V_{DS1} = V_{DS2}$.

### Step 5 — How large is it?

To keep $M_1$, $M_2$ in the triode region (and linear), the design normally uses $V_b \ll V_{GS} - V_{TH}$. Then the factor $(V_{GS} - V_{TH} - V_b)/V_b \approx (V_{GS} - V_{TH})/V_b$ is much larger than one, and the auxiliary amplifiers' noise is **amplified** when referred to the input. For example, with $V_{GS} - V_{TH} = 1$ V and $V_b = 0.2$ V:

$$\frac{1 - 0.2}{0.2} = 4, \qquad V_{n,in} = \sqrt2\times4\,V_n \approx 5.7\,V_n .$$

**Intuition.** A triode transistor with small $V_{DS}$ behaves like a voltage-controlled resistor: its current is $V_{DS}/R_{on}$, which depends strongly on $V_{DS}$ (through $g_{ds} = 1/R_{on}$) and only weakly on $V_{GS}$ (through $g_m \propto V_{DS}$). A millivolt of noise on the drain therefore produces as much current as several millivolts on the gate. This is one of the main drawbacks of linearizing a stage by operating its input devices in triode: the amplifiers that hold $V_{DS}$ constant must be very quiet.

### Result

$$\overline{V_{n,in}^2} = 2\,\overline{V_n^2}\left(\frac{V_{GS} - V_{TH} - V_b}{V_b}\right)^2 \quad\Longleftrightarrow\quad V_{n,in} = \sqrt2\,V_n\,\frac{V_{GS} - V_{TH} - V_b}{V_b},$$

equivalently $2\overline{V_n^2}\,(g_{ds}/g_m)^2$ with $g_m = \mu_nC_{ox}(W/L)V_b$ and $g_{ds} = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH} - V_b) = 1/R_{on}$. Since usually $V_{GS} - V_{TH} \gg V_b$, the noise of $A_1$ and $A_2$ is amplified (e.g. about $5.7V_n$ for $V_{GS} - V_{TH} = 1$ V and $V_b = 0.2$ V).

**Common mistake.** Assuming the amplifiers' noise appears directly at the input ($V_{n,in} = V_n$ or $\sqrt2V_n$), or that the loop rejects it. The loop does the opposite: it *imposes* $V_b + V_{n1}$ on the drain of $M_1$, and the triode device converts that drain-voltage noise into current with the large conductance $g_{ds}$, which is then referred to the input through the small $g_m$.

**Common mistake.** Using saturation-region formulas, e.g. $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$ and $g_{ds} \approx 0$. In the triode region the roles are reversed: $g_m = \mu_nC_{ox}(W/L)V_{DS}$ is small and $g_{ds} = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH} - V_{DS})$ is large. Forgetting the $\sqrt2$ (two independent amplifiers feeding a differential output) is another frequent slip.
