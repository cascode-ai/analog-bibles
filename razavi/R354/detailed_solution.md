# Detailed solution - R354

**Approach.** Write KCL at the two drain nodes with every noise current present and subtract the two equations. The subtraction removes the tail node and leaves one equation for the differential output in terms of the differential input and the noise currents; dividing the noise terms by the signal term refers them to the input, and the uncorrelated powers add.

### Step 1 — Small-signal model and noise sources

Call the left and right drain nodes A and B and the tail node P. The input is $v_{in} = v_{in1} - v_{in2}$ and the output $v_{out} = v_A - v_B$.

- **Diode loads $M_5$, $M_6$:** they deliver $g_{m5}(0 - v_A)$ into A and $g_{m6}(0 - v_B)$ into B, i.e. a resistance $1/g_{m5}$ from each node to ac ground.
- **Cross-coupled $M_3$, $M_4$:** $M_3$ (gate at B) delivers $g_{m3}(0 - v_B)$ into A; $M_4$ (gate at A) delivers $g_{m4}(0 - v_A)$ into B.
- **Input pair:** $M_1$ draws $g_{m1}(v_{in1} - v_P)$ from A to P; $M_2$ draws $g_{m2}(v_{in2} - v_P)$ from B to P.
- **Tail:** the ideal $I_{SS}$ is an ac open circuit and adds no noise.

The six uncorrelated noise currents, each with PSD $4kT\gamma g_m$, are $I_{n5}$, $I_{n3}$ into A; $I_{n6}$, $I_{n4}$ into B; $I_{n1}$ from A to P; $I_{n2}$ from B to P. Given: $g_{m1} = g_{m2}$, $g_{m5} = g_{m6}$, $g_{m3} = g_{m4} = 0.5\,g_{m5}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at nodes A and B

At each node, the current delivered by the two PMOS devices equals the current drawn by the input transistor:

$$-g_{m5}v_A + I_{n5} - g_{m3}v_B + I_{n3} = g_{m1}(v_{in1} - v_P) + I_{n1},$$

$$-g_{m6}v_B + I_{n6} - g_{m4}v_A + I_{n4} = g_{m2}(v_{in2} - v_P) + I_{n2}.$$

Define the total load noise currents

$$I_{nA} = I_{n5} + I_{n3}, \qquad I_{nB} = I_{n6} + I_{n4}.$$

### Step 3 — Subtract to get the differential equation

Subtracting the B equation from the A equation, with $g_{m5} = g_{m6}$, $g_{m3} = g_{m4}$ and $g_{m1} = g_{m2}$:

$$-g_{m5}(v_A - v_B) - g_{m3}(v_B - v_A) + (I_{nA} - I_{nB}) = g_{m1}(v_{in1} - v_{in2}) - g_{m1}(v_P - v_P) + (I_{n1} - I_{n2}).$$

The tail voltage $v_P$ cancels, and the left side gives $-(g_{m5} - g_{m3})v_{out}$:

$$
\begin{aligned}
-(g_{m5} - g_{m3})\,v_{out} + (I_{nA} - I_{nB}) &= g_{m1}v_{in} + (I_{n1} - I_{n2})\\
(g_{m5} - g_{m3})\,v_{out} &= -g_{m1}v_{in} - (I_{n1} - I_{n2}) + (I_{nA} - I_{nB}).
\end{aligned}
$$

For differential signals the diode loads present a conductance $g_{m5}$ and the cross-coupled pair a *negative* conductance $-g_{m3}$, so the net differential load conductance is $g_{m5} - g_{m3}$.

### Step 4 — Differential gain

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{g_{m5} - g_{m3}} = -\frac{g_{m1}}{g_{m5} - 0.5\,g_{m5}} = -\frac{2g_{m1}}{g_{m5}},$$

twice the gain of the diode loads alone ($-g_{m1}/g_{m5}$).

### Step 5 — Input-referred noise voltage

Dividing the noise part by the signal coefficient $-g_{m1}$, the load conductance $g_{m5} - g_{m3}$ cancels:

$$v_{n,in} = \frac{(I_{n1} - I_{n2}) - (I_{nA} - I_{nB})}{g_{m1}} = \frac{I_{n1} - I_{n2} - I_{n5} - I_{n3} + I_{n6} + I_{n4}}{g_{m1}}.$$

The six sources are uncorrelated:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma\left(g_{m1} + g_{m2} + g_{m5} + g_{m3} + g_{m6} + g_{m4}\right)}{g_{m1}^2}\\
&= \frac{4kT\gamma\left(2g_{m1} + 2g_{m3} + 2g_{m5}\right)}{g_{m1}^2}\\
&= 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3} + g_{m5}}{g_{m1}^2}\right).
\end{aligned}
$$

With $g_{m3} = 0.5\,g_{m5}$:

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{1.5\,g_{m5}}{g_{m1}^2}\right).$$

### Step 6 — Interpretation

The factor $8kT$ reflects the two independent halves. The cross-coupled pair raises the gain by reducing the differential load conductance, but every noise current sees that same conductance, so it *adds* $g_{m3}$ to the load term rather than cancelling anything. Plain diode loads of transconductance $0.5\,g_{m5}$ would give the same gain $2g_{m1}/g_{m5}$ with a load term $0.5\,g_{m5}/g_{m1}^2$, one third of the $1.5\,g_{m5}/g_{m1}^2$ found here. (Tail noise, if any, would be common-mode and cancel in $v_A - v_B$.)

### Result

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3} + g_{m5}}{g_{m1}^2}\right) = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{1.5\,g_{m5}}{g_{m1}^2}\right)$$

with differential gain $-g_{m1}/(g_{m5} - g_{m3}) = -2g_{m1}/g_{m5}$. The load conductance cancels when referring to the input, so all six transistors contribute: two input devices with $4kT\gamma/g_{m1}$ each, and four load devices with $4kT\gamma g_m/g_{m1}^2$ each.

**Common mistake.** Writing the load term as $\propto g_{m5} - g_{m3}$, as if the cross-coupled pair cancelled part of the diode-load noise. It cancels part of the load *conductance*, not the *noise*: the noise of $M_3$ and $M_4$ adds in power to that of $M_5$ and $M_6$.

**Common mistake.** Omitting the cross-coupled devices, which gives $8kT\gamma(1/g_{m1} + g_{m5}/g_{m1}^2)$. $M_3$ and $M_4$ inject their noise directly into the output nodes, just like the diode loads.

**Common mistake.** Giving the half-circuit result $4kT\gamma\left(1/g_{m1} + 1.5\,g_{m5}/g_{m1}^2\right)$ without the factor 2, or dividing the output noise by the diode-only gain $g_{m1}/g_{m5}$. Both halves contribute, and noise and gain must use the same load conductance $g_{m5} - g_{m3}$.
