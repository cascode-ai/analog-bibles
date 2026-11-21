# Detailed solution - G396

Find the dc voltage of the resistor midpoint, which is the gate node of $M_3$ and $M_4$. With no differential input the circuit is symmetric, so no current flows through the resistors and the two loads behave as diode-connected devices for the common mode; the output level is then $V_{DD}-|V_{GS3}|$.

### Step 1 — No dc current in the 20-kΩ resistors

With $V_{i1}=V_{i2}=V_{ic}=0$, the left and right halves are identical, so $V_{o1}=V_{o2}=V_{OC}$. The resistors carry $(V_{o1}-V_{o2})/(40\ \mathrm{k\Omega})=0$, and the MOS gates at the midpoint draw no current. Hence there is no drop across either resistor and

$$
V_{G3}=V_{G4}=V_{o1}=V_{o2}=V_{OC}.
$$

Each PMOS load therefore has its gate at its own drain potential, exactly like a diode-connected transistor for common-mode bias.

### Step 2 — Currents and $|V_{GS}|$ of the loads

Each side carries half the tail current, $I_{D3}=I_{D4}=I_{D5}/2=100\ \mu\mathrm A$. A PMOS with $V_{SD}=V_{SG}$ is saturated, and by the square law its gate–source voltage is threshold plus overdrive:

$$
|V_{GS3}|=|V_{tp}|+|V_{ov}|=0.6\ \mathrm V+0.2\ \mathrm V=0.8\ \mathrm V.
$$

### Step 3 — Common-mode output voltage

The source of $M_3$ is at $V_{DD}$, so

$$
V_{OC}=V_{DD}-|V_{GS3}|=2.5\ \mathrm V-0.8\ \mathrm V=1.7\ \mathrm V.
$$

Channel-length modulation ($V_{An}=10$ V, $|V_{Ap}|=20$ V) changes this only slightly, because the loads are diode-connected for the common mode: their low $1/g_m$ fixes $V_{OC}$, and a small current mismatch between $M_1$ and $M_3$ shifts it by only millivolts.

### Step 4 — Check that all devices are in saturation

The common source of $M_1$/$M_2$ is at $V_{ic}-V_{GS1}=0-(0.6+0.2)\ \mathrm V=-0.8$ V.

| Device | Condition | Value | Required |
|---|---|---|---|
| $M_1$, $M_2$ | $V_{DS}=1.7-(-0.8)$ | 2.5 V | $\ge0.2$ V |
| $M_3$, $M_4$ | $V_{SD}=2.5-1.7$ | 0.8 V | $\ge0.2$ V |
| $M_5$ | $V_{DS}=-0.8-(-2.5)$ | 1.7 V | $\ge0.2$ V |

All transistors are saturated, so $V_{OC}=1.7$ V is self-consistent.
