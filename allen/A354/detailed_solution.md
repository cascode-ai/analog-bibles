# Detailed solution - A354

First write the drain–source voltage of the boosting transistor as the difference of two gate–source voltages and see why it cannot grow. The cure is to set that drain voltage by local feedback from a reference that depends only on the input current, so that the extra gate–source voltage the cascode needs for the boosted current is supplied by an amplifier instead of being taken from the boosting transistor. This is the regulated-cascode mirror with an input-current-dependent setpoint. The lower-right mirror (M6–M12, cascode M16, level device M24) is used as the example; the other three are treated the same way.

### Step 1 — Why the boosting transistor stays in triode

The source of the cascode M16 is the drain of M12, and its gate is held by the diode-connected M24 carrying $i_1$:

$$
V_{DS12}=V_{GS24}(i_1)-V_{GS16}(k\,i_1).
$$

With the square law $V_{GS}=V_T+\sqrt{2I/[K'(W/L)]}$, both terms grow with current, and $V_{GS16}$ grows with the boosted current $k\,i_1$. As $i_1$ rises, the increase of $V_{GS24}$ is largely cancelled by the increase of $V_{GS16}$, so $V_{DS12}$ hardly rises. Meanwhile $V_{DS12}(\mathrm{sat})$ of M12 grows as $\sqrt{k\,i_1}$, so M12 never catches up and stays in triode.

### Step 2 — Regulated cascode with an input-dependent setpoint

Drive the gate of each cascode device (M13–M16) from a local feedback amplifier instead of from M21–M24. The amplifier senses the drain of the boosting transistor (node y, the M12–M16 junction) and compares it with a setpoint $V_{ref}(i_1)$ produced from a copy of the input current, for example the drop $i_1R$ across a resistor. A common-source transistor with a current-source load, as in the regulated-cascode mirror, can serve as the amplifier.

<!-- diagram: diagram-01.cir -->

With loop gain $A\gg1$ the loop forces

$$
V_{DS12}\approx V_{ref}(i_1)=i_1R,
$$

whatever the current in M16: the larger $V_{GS16}$ needed for $k\,i_1$ appears at the amplifier output (the gate of M16), not as a reduction of $V_{DS12}$.

### Step 3 — Choosing the setpoint

The setpoint must be small at quiescence, so that M12 is in triode and the mirror is 1:1, and must rise above $V_{DS12}(\mathrm{sat})$ when $i_1$ increases, so that M12 saturates and the gain jumps to $k$. Since $V_{DS}(\mathrm{sat})$ grows only as $\sqrt{i}$, a setpoint growing faster than $\sqrt{i_1}$ is needed:

- at quiescence choose $R$ so that $I_QR\approx0.1\,V_{DS12}(\mathrm{sat})$;
- for larger $i_1$, $i_1R$ grows linearly and overtakes $V_{DS12}(\mathrm{sat})\propto\sqrt{k\,i_1}$, and M12 saturates.

A full gate–source voltage such as that of M24 ($\approx V_T+V_{OV}$) would not do as the setpoint: it already exceeds $V_{DS}(\mathrm{sat})$ at quiescence, and the mirror would boost the quiescent current too. A side benefit of the regulated cascode is a much higher output resistance.

### Step 4 — Why resizing alone is only a partial fix

Making M13–M16 very wide (low, weakly current-dependent $V_{GS}$) and M21–M24 narrow reduces the part of the boosted $V_{GS}$ that is subtracted. With square-law devices, however, every voltage in

$$
V_{DS12}=\bigl[V_T+V_{OV24}(i_1)\bigr]-\bigl[V_T+V_{OV16}(k\,i_1)\bigr]=V_{OV24}-V_{OV16}
$$

scales as $\sqrt{i_1}$, exactly like $V_{DS12}(\mathrm{sat})$. The ratio $V_{DS12}/V_{DS12}(\mathrm{sat})$ is therefore independent of current, and the output device stays in the same region at all currents: always triode (no boost), or always saturated (a fixed $k$:1 mirror that also multiplies the quiescent current). This scaling is why the setpoint needs a term that grows faster than $\sqrt{i_1}$.
