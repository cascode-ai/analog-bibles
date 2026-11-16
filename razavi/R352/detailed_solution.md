# Detailed solution - R352

**Approach.** First reduce each current mirror to a single noise current. Without the bypass capacitors, a diode-connected device fed by an ideal current source passes its own gate-referred noise to the shared gate line, so each mirror output carries the noise of *both* of its transistors. Then find the input-referred voltage (input shorted: compare the output short-circuit noise current with the signal current $g_{m1}v_{in}$) and current (input open: $M_1$ simply passes the current set by $M_2$ to the output).

### Step 1 — Flicker-noise sources

Each transistor's flicker noise is a voltage $V_{nj}$ in series with its gate, with PSD

$$\overline{V_{nj}^2} = \frac{K}{C_{ox}(WL)_j\,f},$$

where $K = K_N$ for the NMOS devices ($M_0$, $M_1$, $M_2$) and $K = K_P$ for the PMOS devices ($M_3$, $M_4$). $C_{ox}$ is the gate-oxide capacitance per unit area, $(WL)_j$ the gate area and $f$ the frequency. All five sources are uncorrelated. $I_1$ and $I_2$ are ideal and noiseless, and $\lambda = 0$, so every saturated transistor is an ideal (infinite-impedance) current source at its drain.

### Step 2 — The PMOS mirror $M_4$–$M_3$ without the capacitor

$M_4$ is diode-connected and carries the ideal current $I_2$. Its gate line also drives the gate of $M_3$, which draws no current. So the small-signal current of $M_4$ is **zero**. With its noise in series with the gate, $M_4$'s current is $g_{m4}(v_{sg4} - V_{n4})$ (the sign convention for $V_{n4}$ is immaterial). Setting this to zero and using $v_{sg4} = 0 - v_{g}$ (source at $V_{DD}$, gate line at $v_g$):

$$g_{m4}(-v_g - V_{n4}) = 0\quad\Longrightarrow\quad v_g = -V_{n4}.$$

**Physically:** to keep its current fixed at $I_2$, $M_4$ must change its gate–source voltage by exactly its own noise voltage, and that change appears on the gate line. Without the capacitor nothing filters it.

$M_3$ sees this gate voltage plus its own noise, so its drain noise current is

$$I_{n,M3} = g_{m3}(-v_g - V_{n3}) = g_{m3}(V_{n4} - V_{n3}),$$

$$\overline{I_{n,M3}^2} = g_{m3}^2\left(\overline{V_{n3}^2} + \overline{V_{n4}^2}\right) = \frac{g_{m3}^2K_P}{C_{ox}f}\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right).$$

### Step 3 — The NMOS mirror $M_0$–$M_2$ without the capacitor

By the same argument, the diode-connected $M_0$ carries the fixed current $I_1$, so the shared gate line moves by $M_0$'s noise voltage, and $M_2$ adds its own:

$$\overline{I_{n,M2}^2} = g_{m2}^2\left(\overline{V_{n2}^2} + \overline{V_{n0}^2}\right) = \frac{g_{m2}^2K_N}{C_{ox}f}\left(\frac{1}{(WL)_2} + \frac{1}{(WL)_0}\right).$$

This is the current that the figure labels $\overline{I_{n2}^2}$. It flows from the input node (source of $M_1$) to ground.

**Reduced circuit.** $M_1$ (gate at $V_b$ with its noise $V_{n1}$, source at the input, drain at the output); a noise current $I_{n,M3}$ injected into the output; a noise current $I_{n,M2}$ drawn from the input node.

<!-- diagram: diagram-01.cir -->

### Step 4 — Input-referred noise voltage (input shorted)

Short the input to ac ground. Then:

- $I_{n,M2}$ flows into the short and does **not** reach the output.
- $M_1$ has its source grounded and its gate at $V_{n1}$ (the bias $V_b$ is an ac ground), so it draws a noise current $g_{m1}V_{n1}$ from the output.
- $I_{n,M3}$ flows into the output.

The output node has some impedance $Z_L$ (infinite with $\lambda = 0$ unless a following stage loads it). Noise and signal currents both flow into that same $Z_L$, so it cancels when we refer to the input. It is enough to compare output short-circuit currents.

**Signal.** A voltage $v_{in}$ at the source changes $M_1$'s drain current by $g_{m1}(0 - v_{in}) = -g_{m1}v_{in}$: the transconductance from the input to the output is $g_{m1}$ (no body effect).

**Refer to the input.** Divide the noise currents by $g_{m1}$ and add the uncorrelated powers:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{g_{m1}^2\overline{V_{n1}^2} + \overline{I_{n,M3}^2}}{g_{m1}^2} = \overline{V_{n1}^2} + \frac{g_{m3}^2}{g_{m1}^2}\left(\overline{V_{n3}^2} + \overline{V_{n4}^2}\right)\\
&= \frac{1}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + \frac{g_{m3}^2}{g_{m1}^2}K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right].
\end{aligned}
$$

### Step 5 — Input-referred noise current (input open)

Open the input. The source node of $M_1$ is now connected only to $M_1$ and $M_2$. KCL there says that **$M_1$ carries exactly $M_2$'s current**. Therefore:

- $M_2$'s (and $M_0$'s) noise current $I_{n,M2}$ is passed through $M_1$ to the output with unity current gain.
- $M_1$'s own noise $V_{n1}$ cannot change $M_1$'s current, which is fixed by $M_2$ (with $\lambda = 0$). It only moves the floating source voltage, so it does not reach the output.
- $I_{n,M3}$ is still injected directly into the output.

**Signal path.** An input current $i_{in}$ injected into the source node changes $M_1$'s current by the same amount, so it reaches the output with **unity current gain**. Hence the noise currents arriving at the output are referred to the input one-to-one:

$$
\begin{aligned}
\overline{I_{n,in}^2} &= \overline{I_{n,M2}^2} + \overline{I_{n,M3}^2}\\
&= \frac{1}{C_{ox}f}\left[g_{m2}^2K_N\left(\frac{1}{(WL)_2} + \frac{1}{(WL)_0}\right) + g_{m3}^2K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right].
\end{aligned}
$$

### Step 6 — Effect of removing the capacitors

With the capacitors in place, the gate lines of the mirrors are (at the frequencies of interest) ac-grounded, so the noise of $M_4$ and $M_0$ is filtered out. Each mirror then contributes only the noise of its output device. Removing the capacitors adds the diode device's noise, $\overline{V_{n4}^2}$ and $\overline{V_{n0}^2}$. For equal device areas this **doubles** each mirror's contribution, and the input-referred current now also contains $M_0$'s noise. (If the body effect of $M_1$ were kept, the signal transconductance would become $g_{m1} + g_{mb1}$, and the $M_3$/$M_4$ term in the voltage would be divided by $(g_{m1} + g_{mb1})^2$; the problem tells us to neglect it.)

### Result

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{1}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + \frac{g_{m3}^2}{g_{m1}^2}K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right]$$

$$\overline{I_{n,in}^2}\Big|_{1/f} = \frac{1}{C_{ox}f}\left[g_{m2}^2K_N\left(\frac{1}{(WL)_2} + \frac{1}{(WL)_0}\right) + g_{m3}^2K_P\left(\frac{1}{(WL)_3} + \frac{1}{(WL)_4}\right)\right]$$

- The diode devices pass their noise to the mirror gates: $M_3$'s noise current is $g_{m3}(V_{n3} - V_{n4})$, and $M_2$'s is $g_{m2}(V_{n2} - V_{n0})$.
- Voltage: $M_1$ and the $M_3$/$M_4$ mirror; $M_2$'s noise goes into the input short.
- Current: the $M_2$/$M_0$ and $M_3$/$M_4$ mirrors; $M_1$'s own noise has no effect when the input is open.

**Common mistake.** Ignoring $M_4$ and $M_0$, i.e. giving the capacitor-bypassed result. Without the capacitors, the diode-connected devices, which carry fixed currents, transfer their gate-referred noise unattenuated to the gates of $M_3$ and $M_2$.

**Common mistake.** Putting $M_2$'s noise into the input-referred voltage. With the input shorted, $M_2$'s noise current flows into the short and never reaches the output.

**Common mistake.** Putting $M_1$'s noise into the input-referred current. With the input open and $\lambda = 0$, $M_1$'s current is forced to equal $M_2$'s, so $M_1$'s own noise only changes its source voltage.
