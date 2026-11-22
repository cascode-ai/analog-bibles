# Detailed solution - A524

In the switched-capacitor version each comparator's threshold is set by a capacitive divider instead of a resistor tap. Find that threshold by charge conservation at the comparator's inverting-input node over the two clock phases, set it equal to the conventional tap voltages, and then compare the two converters.

### Step 1 — Conventional thresholds

The four equal resistors divide $V_{REF}$ into taps at $3V_{REF}/4$, $V_{REF}/2$ and $V_{REF}/4$ for comparators 1, 2 and 3. Comparator $k$ changes state when $V^*_{IN}$ crosses its tap.

### Step 2 — Threshold of one switched-capacitor comparator

Call the inverting-input node of comparator $k$ node X; the capacitors $C$ and $C_k$ have their right plates at X.

- **$\phi_1$:** the feedback switch puts the comparator in unity-gain feedback, so X settles at the comparator's own trip point, $V_X=V_{OS}$ (its input-referred offset). The left plate of $C$ is at $V_{REF}$ and that of $C_k$ at ground, so the charge on the X-side plates is
$$
q_X(\phi_1)=C(V_{OS}-V_{REF})+C_k(V_{OS}-0).
$$
- **$\phi_2$:** the feedback switch opens and node X floats; both left plates switch to $V^*_{IN}$:
$$
q_X(\phi_2)=(C+C_k)(V_X-V^*_{IN}).
$$

Node X is isolated, so $q_X(\phi_2)=q_X(\phi_1)$:

$$
(C+C_k)(V_X-V^*_{IN})=C(V_{OS}-V_{REF})+C_kV_{OS}
\;\Longrightarrow\;
V_X-V_{OS}=V^*_{IN}-V_{REF}\,\frac{C}{C+C_k}.
$$

The comparator responds to the sign of $V_X-V_{OS}$, so its threshold is

$$
V_{th,k}=V_{REF}\,\frac{C}{C+C_k},
$$

independent of $V_{OS}$. Because $V^*_{IN}$ reaches the inverting input, the output is high for $V^*_{IN}$ below the threshold, the complement of the conventional comparator; the encoder or the complementary latch output absorbs this.

### Step 3 — Capacitor values

Setting $C/(C+C_k)=V_{th,k}/V_{REF}$ gives $C_k=C\,(V_{REF}/V_{th,k}-1)$:

| Comparator | Threshold | $C_k$ |
|---|---|---|
| 1 | $3V_{REF}/4$ | $C_1=C(4/3-1)=C/3$ |
| 2 | $V_{REF}/2$ | $C_2=C(2-1)=C$ |
| 3 | $V_{REF}/4$ | $C_3=C(4-1)=3C$ |

$$
C_1=\frac C3,\qquad C_2=C,\qquad C_3=3C .
$$

A parasitic capacitance from X to ground adds a term $C_p(V_X-V_{OS})$ that is zero at the threshold, so it only attenuates $V_X-V_{OS}$ and does not move the threshold.

### Step 4 — Comparison

**Comparator offset.** In the conventional converter each offset adds directly to its tap voltage; for a $\pm\tfrac12$ LSB threshold error budget the offset must stay below $V_{REF}/8$ here ($V_{REF}/2^{N+1}$ in general). Each comparator also works at a different input common-mode level, so finite CMRR adds input-dependent offsets. The switched-capacitor converter auto-zeroes the offset (and low-frequency noise) in every $\phi_1$, and all its comparators operate at the same common-mode level near ground.

**Speed.** The conventional converter needs only one comparison per sample and loads the input with just the comparator input capacitances. The switched-capacitor converter needs two phases per conversion: in $\phi_1$ the auto-zero loop and the charging of $C$ and $C_k$ must settle, and in $\phi_2$ the charge redistribution through the switches must settle. In exchange its comparators can be very simple (for example auto-zeroed inverters) without precision preamplifiers, so the clock can be fast; the net speed comparison depends on the comparator design.

**Accuracy.** The conventional thresholds depend on resistor matching, the static current of the string and tap loading, and they require low-offset comparators. The switched-capacitor thresholds depend only on capacitor ratios, which match to about 0.1% in CMOS, with no static power, so this version is usually more accurate. Its limits are the unequal capacitors, whose spread grows with resolution (from $C/(2^N-1)$ to $(2^N-1)C$), and switch charge injection, clock feedthrough and $kT/C$ noise.
