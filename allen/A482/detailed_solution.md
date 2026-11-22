# Detailed solution - A482

The circuit is a successive-approximation ADC. Its DAC is formed by two resistor-string decoders and a capacitive subtraction at the comparator input, and the op amp serves both as an auto-zeroed comparator and, in φ1, as a unity-gain buffer. First derive what the comparator sees in each clock period, then follow the SAR through the four periods, and finally list the error sources.

### Step 1 — DAC voltages from the resistor string

The string ($3R$ then $4\times R/4$, total $4R$) gives taps at $V_{REF}$, $\tfrac34$, $\tfrac12$, $\tfrac14V_{REF}$ across the $R$'s and $\tfrac4{16}$, $\tfrac3{16}$, $\tfrac2{16}$, $\tfrac1{16}V_{REF}$ across the $R/4$'s. From the switch labels,

$$
V_1=\frac{2A+B+1}{4}V_{REF}\in\left\{\tfrac14,\tfrac12,\tfrac34,1\right\}V_{REF},\qquad
V_2=\frac{4-2C-D}{16}V_{REF}\in\left\{\tfrac4{16},\tfrac3{16},\tfrac2{16},\tfrac1{16}\right\}V_{REF},
$$

$$
V_{DAC}\equiv V_1-V_2=\frac{8A+4B+2C+D}{16}V_{REF},
$$

a binary-weighted 4-bit value.

### Step 2 — What happens in one clock period

- φ1 ($0$ to $T/2$): the feedback switch closes, so the op amp is a unity-gain buffer and $v_X$ sits at its virtual ground (at $V_{OS}$ if there is an offset, which is thereby stored on the capacitors). The left plate of the upper $C$ is grounded and node $V_T$ of the lower $C$ is connected to $V_1$.
- φ2 ($T/2$ to $T$): the feedback switch opens and the op amp becomes an open-loop comparator. The upper $C$ moves from 0 to $V_{Analog}$ and $V_T$ moves from $V_1$ to $V_2$. Charge conservation at $v_X$ (total capacitance $2C$) gives

$$
\Delta v_X=\frac{C\,V_{Analog}+C\left(V_2-V_1\right)}{2C}=\frac{V_{Analog}-V_{DAC}}{2}.
$$

The comparator output (with $v_X$ at its inverting input) is low if $V_{Analog}>V_{DAC}$ and high if $V_{Analog}<V_{DAC}$; the SAR reads it at the end of φ2.

### Step 3 — Complete conversion, period by period

| Period | Trial code set by the SAR | $V_{DAC}$ compared with $V_{Analog}$ | Decision at end of φ2 |
|---|---|---|---|
| 1 ($0$–$T$) | $ABCD=1000$ | $V_{REF}/2$ | keep $A=1$ if output low, else $A=0$ |
| 2 ($T$–$2T$) | $A\,1\,0\,0$ | $A\,V_{REF}/2+V_{REF}/4$ | keep or clear $B$ |
| 3 ($2T$–$3T$) | $A\,B\,1\,0$ | previous $+V_{REF}/8$ | keep or clear $C$ |
| 4 ($3T$–$4T$) | $A\,B\,C\,1$ | previous $+V_{REF}/16$ | keep or clear $D$ |

Each period repeats the φ1 auto-zero and the φ2 comparison with the new trial code, MSB first, so after $4T$ the register holds the digital word $ABCD$ (an additional period may be used to transfer the result and reset the register). Because $V_{Analog}$ is applied anew in every φ2, it must stay constant during the four periods, i.e. it must come from a sample-and-hold.

### Step 4 — Sources of error

- Amplifier/comparator: finite gain and resolution (the difference appears halved at $v_X$, so ½ LSB at the input is only $V_{REF}/64$ there), gain-bandwidth, slew rate and settling within $T/2$, noise; the offset is largely cancelled by the φ1 auto-zero, leaving only a residue.
- Matching: resistor mismatch in the string (tap errors and the $R$ to $R/4$ ratio between the two decoders), and mismatch between the two capacitors $C$, which gives a gain error between $V_{Analog}$ and $V_{DAC}$.
- Switches: on-resistance (RC settling of the taps and capacitors), charge injection and clock feedthrough, especially from the φ1 feedback switch onto the high-impedance node $v_X$.
- Parasitic capacitances: at $v_X$ they attenuate the comparator input; bottom-plate parasitics load the string taps.
- Reference: accuracy, stability and loading of $V_{REF}$ and of the string by the switched capacitors.
- Input: $kT/C$ noise and any change of $V_{Analog}$ during the conversion if no sample-and-hold is used.
