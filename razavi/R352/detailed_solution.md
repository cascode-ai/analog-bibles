# Detailed solution - R352

**Approach.** Without the bypass capacitors, a diode-connected device fed by an ideal current source passes its own gate-referred noise to the shared gate line, so each mirror output carries the noise of *both* of its transistors. Reduce each mirror to a single noise current, then find the input-referred voltage (input shorted: compare the output short-circuit noise current with the signal current $g_{m1}v_{in}$) and current (input open: $M_1$ simply passes the current set by $M_2$ to the output).

### Step 1 — The PMOS mirror $M_4$–$M_3$ without the capacitor

Each transistor's flicker noise is a voltage $V_{nj}$ in series with its gate, $\overline{V_{nj}^2} = K/[C_{ox}(WL)_j\,f]$, with $K = K_N$ for $M_0$, $M_1$, $M_2$ and $K = K_P$ for $M_3$, $M_4$. The five sources are uncorrelated, and with $\lambda = 0$ every saturated transistor is an ideal current source at its drain.

$M_4$ is diode-connected and carries the ideal current $I_2$, and the gate of $M_3$ draws no current, so the small-signal current of $M_4$ is **zero**. With its gate noise, $M_4$'s current is $g_{m4}(v_{sg4} - V_{n4})$ (the sign convention for $V_{n4}$ is immaterial), with $v_{sg4} = 0 - v_g$ (source at $V_{DD}$, gate line at $v_g$):

$$g_{m4}(-v_g - V_{n4}) = 0\quad\Longrightarrow\quad v_g = -V_{n4}.$$

So $M_4$'s noise appears unfiltered on the gate line. $M_3$ sees this gate voltage plus its own noise, so its drain noise current, injected into the output, is

$$I_{n,M3} = g_{m3}(-v_g - V_{n3}) = g_{m3}(V_{n4} - V_{n3}),$$

$$\overline{I_{n,M3}^2} = g_{m3}^2\left(\overline{V_{n3}^2} + \overline{V_{n4}^2}\right) = \frac{g_{m3}^2K_P}{C_{ox}f}\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right).$$

### Step 2 — The NMOS mirror $M_0$–$M_2$ without the capacitor

By the same argument, the diode-connected $M_0$ carries the fixed current $I_1$, so the shared gate line moves by $M_0$'s noise voltage ($v_g = -V_{n0}$), and $M_2$ adds its own: $I_{n,M2} = g_{m2}(V_{n2} - V_{n0})$, with

$$\overline{I_{n,M2}^2} = g_{m2}^2\left(\overline{V_{n2}^2} + \overline{V_{n0}^2}\right) = \frac{g_{m2}^2K_N}{C_{ox}f}\left(\frac{1}{(WL)_2} + \frac{1}{(WL)_0}\right).$$

This is the current that the figure labels $\overline{I_{n2}^2}$. It flows from the input node (source of $M_1$) to ground.

**Reduced circuit.** $M_1$, drawn as the controlled source $g_{m1}(V_{n1} - v_{in})$ from the output to the input, with its gate node G at $V_{n1}$ (the bias $V_b$ is an ac ground); a noise current $I_{n,M3}$ injected into the output; a noise current $I_{n,M2}$ drawn from the input node.

<!-- diagram: diagram-01.cir -->

### Step 3 — Input-referred noise voltage (input shorted)

Short the input to ac ground. Then:

- $I_{n,M2}$ flows into the short and does **not** reach the output.
- $M_1$, with its source grounded and its gate node G at $V_{n1}$, draws a noise current $g_{m1}V_{n1}$ from the output.
- $I_{n,M3}$ flows into the output.

Noise and signal currents flow into the same output impedance (infinite with $\lambda = 0$ unless a following stage loads it), so it is enough to compare output short-circuit currents.

**Signal.** A voltage $v_{in}$ at the source changes $M_1$'s drain current by $g_{m1}(0 - v_{in}) = -g_{m1}v_{in}$: the transconductance from the input to the output is $g_{m1}$ (no body effect).

**Refer to the input.** Divide the noise currents by $g_{m1}$ and add the uncorrelated powers:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{g_{m1}^2\overline{V_{n1}^2} + \overline{I_{n,M3}^2}}{g_{m1}^2} = \overline{V_{n1}^2} + \frac{g_{m3}^2}{g_{m1}^2}\left(\overline{V_{n3}^2} + \overline{V_{n4}^2}\right)\\
&= \frac{1}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + \frac{g_{m3}^2}{g_{m1}^2}K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right].
\end{aligned}
$$

### Step 4 — Input-referred noise current (input open)

Open the input. The source node of $M_1$ then connects only to $M_1$ and $M_2$, so by KCL **$M_1$ carries exactly $M_2$'s current**:

- $I_{n,M2}$ (the noise of $M_2$ and $M_0$) passes through $M_1$ to the output with unity current gain.
- $M_1$'s own noise $V_{n1}$ cannot change its current, which $M_2$ fixes ($\lambda = 0$); it only moves the floating source voltage, so it does not reach the output.
- $I_{n,M3}$ is still injected directly into the output.

An input current $i_{in}$ injected into the source node likewise reaches the output with **unity current gain**, so the noise currents arriving at the output are referred to the input one-to-one:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= \overline{I_{n,M2}^2} + \overline{I_{n,M3}^2}\\
&= \frac{1}{C_{ox}f}\left[g_{m2}^2K_N\left(\frac{1}{(WL)_2} + \frac{1}{(WL)_0}\right) + g_{m3}^2K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right].
\end{aligned}
$$

### Step 5 — Effect of removing the capacitors

With the capacitors in place, the mirror gate lines are ac-grounded at the frequencies of interest, so the noise of $M_4$ and $M_0$ is filtered out and each mirror contributes only the noise of its output device. Removing the capacitors adds $\overline{V_{n4}^2}$ and $\overline{V_{n0}^2}$: for equal device areas this **doubles** each mirror's contribution, and the input-referred current now also contains $M_0$'s noise. (If the body effect of $M_1$ were kept, the signal transconductance would become $g_{m1} + g_{mb1}$, and the output noise currents in the voltage result would be divided by $(g_{m1} + g_{mb1})^2$ instead of $g_{m1}^2$; the problem says to neglect it.)

### Result

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{1}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + \frac{g_{m3}^2}{g_{m1}^2}K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right]$$

$$\overline{I_{n,in}^2}\Big|_{1/f} = \frac{1}{C_{ox}f}\left[g_{m2}^2K_N\left(\frac{1}{(WL)_2} + \frac{1}{(WL)_0}\right) + g_{m3}^2K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right]$$

- The diode devices pass their noise to the mirror gates: $M_3$'s noise current is $g_{m3}(V_{n4} - V_{n3})$, and $M_2$'s is $g_{m2}(V_{n2} - V_{n0})$.
- Voltage: $M_1$ and the $M_3$/$M_4$ mirror; $M_2$'s noise goes into the input short.
- Current: the $M_2$/$M_0$ and $M_3$/$M_4$ mirrors; $M_1$'s own noise has no effect when the input is open.

**Common mistake.** Ignoring $M_4$ and $M_0$, i.e. giving the capacitor-bypassed result. Without the capacitors, the diode-connected devices, which carry fixed currents, pass their gate-referred noise unattenuated to the gates of $M_3$ and $M_2$.

**Common mistake.** Putting $M_2$'s noise into the input-referred voltage. With the input shorted, $M_2$'s noise current flows into the short and never reaches the output.

**Common mistake.** Putting $M_1$'s noise into the input-referred current. With the input open and $\lambda = 0$, $M_1$'s current is forced to equal $M_2$'s, so its own noise only moves its source voltage.
