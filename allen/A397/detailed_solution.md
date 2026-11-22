# Detailed solution - A397

To compare fairly, first derive what the switched-capacitor comparator actually computes: charge conservation at the inverting input between the two phases shows how the offset is stored and removed, and what the parasitic capacitance costs. The advantages and disadvantages then follow from that result and from the switching operation itself.

### Step 1 — Phase φ1: storing the offset

With the feedback switch closed, the comparator is a unity-gain follower of its own offset source, so the inverting input settles to

$$
v_-(\varphi_1)=\frac{A}{1+A}V_{OS}.
$$

At the same time $C$ is charged to $V_C=V_1-v_-(\varphi_1)$, and $C_p$ holds $v_-(\varphi_1)$. The offset is thus sampled onto the capacitors together with $V_1$.

### Step 2 — Phase φ2: comparing

The feedback switch opens, so the inverting node is floating and its charge is conserved, while the input plate of $C$ steps from $V_1$ to $V_2$. The step couples through the divider $C$, $C_p$:

$$
v_-(\varphi_2)=v_-(\varphi_1)+\frac{C}{C+C_p}(V_2-V_1).
$$

The open-loop comparator output is

$$
V_{out}(\varphi_2)=A\bigl[V_{OS}-v_-(\varphi_2)\bigr]
=\frac{A}{1+A}V_{OS}-A\frac{C}{C+C_p}(V_2-V_1).
$$

Referred to the comparator input, the remaining offset is $V_{OS}/(1+A)$, i.e. the offset is reduced by the factor $1+A$, while the signal $V_2-V_1$ is attenuated by $C/(C+C_p)$.

### Step 3 — Advantages over an open-loop comparator

- **Offset cancellation (autozeroing).** By Step 2 the offset drops from $V_{OS}$ to $V_{OS}/(1+A)$; low-frequency noise and drift that change slowly compared with the clock are cancelled in the same way.
- **Relaxed input common-mode range.** The noninverting input stays at ground and the inverting input stays near $V_{OS}$; the signals reach the amplifier only through $C$. $V_1$ and $V_2$ may therefore span a range far wider than the amplifier's own input common-mode range.
- **Built-in sample-and-hold and single-ended comparison.** Two signals, or a signal and a reference, are compared with one single-ended amplifier, and each input is sampled at a defined instant.

### Step 4 — Disadvantages

- **Discrete-time operation.** Switches and a two-phase nonoverlapping clock are needed, and part of every period is spent in the autozero phase, which limits the comparison rate; an open-loop comparator works continuously.
- **Switch errors.** Charge injection and clock feedthrough of the φ1 switch at the floating node leave a residual offset that often limits the achievable accuracy, and sampling adds $kT/C$ noise.
- **Stability requirement.** During φ1 the amplifier must be stable in unity-gain feedback, which an uncompensated high-speed comparator generally is not; compensating it slows it down.
- **Attenuation and overhead.** $C_p$ reduces the effective gain by $C/(C+C_p)$, so $C$ must be large compared with $C_p$; the capacitors and switches add area and add settling time to both phases.

In short, the switched-capacitor comparator trades continuous-time operation, speed and simplicity for low offset and a wide input range.
