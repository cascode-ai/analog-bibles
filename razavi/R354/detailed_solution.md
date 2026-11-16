# Detailed solution - R354

**Approach.** Write KCL at the two drain nodes with every noise current present, then subtract the two equations. The subtraction removes the tail node and gives a single equation for the differential output in terms of the differential input and the noise currents. Dividing the noise terms by the signal term refers them to the input, and the uncorrelated powers add.

### Step 1 — Small-signal model and noise sources

**Nodes:** A (left drain: $M_1$, $M_5$, drain of $M_3$, gate of $M_4$), B (right drain: $M_2$, $M_6$, drain of $M_4$, gate of $M_3$), and the tail node P. The input is $v_{in} = v_{in1} - v_{in2}$ (gate of $M_1$ minus gate of $M_2$) and the output is $v_{out} = v_A - v_B$.

- **Diode-connected loads $M_5$, $M_6$** (source at $V_{DD}$ = ac ground, gate = drain): each delivers $g_{m5}(0 - v_A)$ into A, respectively $g_{m6}(0 - v_B)$ into B. That is a resistance $1/g_{m5}$ from each node to ac ground.
- **Cross-coupled $M_3$, $M_4$**: $M_3$ (gate at B, drain at A) delivers $g_{m3}(0 - v_B)$ into A; $M_4$ (gate at A, drain at B) delivers $g_{m4}(0 - v_A)$ into B.
- **Input pair**: $M_1$ draws $g_{m1}(v_{in1} - v_P)$ from A to P; $M_2$ draws $g_{m2}(v_{in2} - v_P)$ from B to P.
- **Tail**: the ideal source $I_{SS}$ is an open circuit for ac and adds no noise.

**Noise currents** (channel thermal noise, each in parallel with its device, PSD $4kT\gamma g_m$): $I_{n5}$, $I_{n3}$ into A; $I_{n6}$, $I_{n4}$ into B; $I_{n1}$ from A to P; $I_{n2}$ from B to P. Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. All six are uncorrelated.

Given: $g_{m1} = g_{m2}$, $g_{m5} = g_{m6}$, $g_{m3} = g_{m4} = 0.5\,g_{m5}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at nodes A and B

At each node, the current delivered by the two PMOS devices equals the current drawn by the input transistor.

**Node A:**

$$-g_{m5}v_A + I_{n5} - g_{m3}v_B + I_{n3} = g_{m1}(v_{in1} - v_P) + I_{n1}.$$

**Node B:**

$$-g_{m6}v_B + I_{n6} - g_{m4}v_A + I_{n4} = g_{m2}(v_{in2} - v_P) + I_{n2}.$$

Define the total load noise currents at each node:

$$I_{nA} = I_{n5} + I_{n3}, \qquad I_{nB} = I_{n6} + I_{n4}.$$

### Step 3 — Subtract to get the differential equation

Subtract the B equation from the A equation, using $g_{m5} = g_{m6}$, $g_{m3} = g_{m4}$ and $g_{m1} = g_{m2}$:

$$-g_{m5}(v_A - v_B) - g_{m3}(v_B - v_A) + (I_{nA} - I_{nB}) = g_{m1}(v_{in1} - v_{in2}) - g_{m1}(v_P - v_P) + (I_{n1} - I_{n2}).$$

The tail voltage $v_P$ cancels: whatever the tail node does, it affects both sides equally. Simplify the left side, $-g_{m5}(v_A - v_B) + g_{m3}(v_A - v_B) = -(g_{m5} - g_{m3})v_{out}$:

$$
\begin{aligned}
-(g_{m5} - g_{m3})\,v_{out} + (I_{nA} - I_{nB}) &= g_{m1}v_{in} + (I_{n1} - I_{n2})\\
(g_{m5} - g_{m3})\,v_{out} &= -g_{m1}v_{in} - (I_{n1} - I_{n2}) + (I_{nA} - I_{nB}).
\end{aligned}
$$

**Physical meaning.** For differential signals the diode loads present a conductance $g_{m5}$, while the cross-coupled pair presents a *negative* conductance $-g_{m3}$ (positive feedback). The net differential load conductance is $g_{m5} - g_{m3}$.

### Step 4 — Differential gain

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m5} - g_{m3}} = -\frac{g_{m1}}{g_{m5} - 0.5\,g_{m5}} = -\frac{2g_{m1}}{g_{m5}}.$$

The cross-coupled pair doubles the gain compared with the diode loads alone ($-g_{m1}/g_{m5}$).

### Step 5 — Input-referred noise voltage

Divide the noise part of $(g_{m5} - g_{m3})v_{out}$ by the signal coefficient $-g_{m1}$. The load conductance $g_{m5} - g_{m3}$ multiplies signal and noise alike and cancels:

$$v_{n,in} = \frac{(I_{n1} - I_{n2}) - (I_{nA} - I_{nB})}{g_{m1}} = \frac{I_{n1} - I_{n2} - I_{n5} - I_{n3} + I_{n6} + I_{n4}}{g_{m1}}.$$

All six sources are uncorrelated, so the PSD is the sum of the individual PSDs divided by $g_{m1}^2$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma\left(g_{m1} + g_{m2} + g_{m5} + g_{m3} + g_{m6} + g_{m4}\right)}{g_{m1}^2}\\
&= \frac{4kT\gamma\left(2g_{m1} + 2g_{m3} + 2g_{m5}\right)}{g_{m1}^2}\\
&= 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3} + g_{m5}}{g_{m1}^2}\right).
\end{aligned}
$$

Substituting $g_{m3} = 0.5\,g_{m5}$:

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{1.5\,g_{m5}}{g_{m1}^2}\right).$$

### Step 6 — Interpretation

- **Factor 2 ($8kT$ instead of $4kT$):** a differential pair has two input devices and two sets of loads, each contributing independently, so the noise power is twice that of one half.
- **The cross-coupled pair adds noise.** It raises the gain by reducing the differential load conductance, but every noise current sees that same reduced conductance, so the referred noise of each load device is still just its current divided by $g_{m1}$. The cross-coupled devices therefore add $g_{m3}$ to the load term instead of cancelling anything.
- **Cost of the gain boost.** The same gain $2g_{m1}/g_{m5}$ could be obtained with plain diode loads of transconductance $0.5\,g_{m5}$. Their load term would be $0.5\,g_{m5}/g_{m1}^2$, one third of the $1.5\,g_{m5}/g_{m1}^2$ found here.
- **Tail source:** ideal here, and in any case its noise would be common-mode and would cancel in $v_A - v_B$.

### Result

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3} + g_{m5}}{g_{m1}^2}\right) = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{1.5\,g_{m5}}{g_{m1}^2}\right)$$

with differential gain $-g_{m1}/(g_{m5} - g_{m3}) = -2g_{m1}/g_{m5}$. The load conductance cancels when referring to the input, so all six transistors contribute: two input devices with $4kT\gamma/g_{m1}$ each, and four load devices with $4kT\gamma g_m/g_{m1}^2$ each.

**Common mistake.** Claiming that the cross-coupled pair cancels part of the diode-load noise, for example writing the load term as $\propto g_{m5} - g_{m3}$. The negative conductance cancels part of the load *conductance*, not the *noise*: the noise currents of $M_3$ and $M_4$ are independent sources and add in power to those of $M_5$ and $M_6$.

**Common mistake.** Omitting the cross-coupled devices, which gives $8kT\gamma(1/g_{m1} + g_{m5}/g_{m1}^2)$. $M_3$ and $M_4$ inject their noise currents directly into the output nodes, just like the diode loads.

**Common mistake.** Giving the single-ended (half-circuit) result $4kT\gamma\left(1/g_{m1} + 1.5\,g_{m5}/g_{m1}^2\right)$ without the factor 2. The differential input sees the independent noise of both halves. Also, the output noise and the gain must be computed with the same differential load conductance $g_{m5} - g_{m3}$; dividing by the gain $g_{m1}/g_{m5}$ of the diode-only circuit, for instance, gives a wrong result.
