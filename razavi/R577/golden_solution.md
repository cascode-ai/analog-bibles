# Golden Solution - R577

## Reference answer

A single dc sweep (no transient runs) with a tiny forced voltage or current across the switch:

- Turn the switch on with dc sources: NMOS gate at $V_{DD}$, PMOS gate at 0. Keep the bulks as in the real circuit (NMOS at ground, PMOS at $V_{DD}$) so that body effect is included. $C_H$ plays no role at dc and can be removed.
- Make $V_{in}$ a dc source swept from 0 to $V_{DD}$ (.DC). Force a very small voltage difference across the switch, e.g., drive the output with a controlled source equal to $V_{in} + \Delta V$ ($\Delta V$ ≈ 1 mV), or inject a small dc test current $I_{test}$ (≈ 1 µA) into the output node. Either way both devices stay in deep triode with $V_{DS} \approx 0$, exactly as when the switch is tracking.
- Plot $R_{on,eq} = \Delta V/I$ (current through the forcing source), or $(V_{out} - V_{in})/I_{test}$, versus $V_{in}$. The whole curve comes from one run. Plotting the current of each transistor separately also gives $R_{on,N}$ and $R_{on,P}$.
- Equivalent alternative: a small-signal analysis (.AC with a unit ac current source at the output, or .TF) repeated over the dc input level with .STEP or a swept dc bias, reading the small-signal resistance between input and output.

## Grading notes

+2: a dc sweep of the input level (or a small-signal .AC/.TF analysis swept over the bias) with the switch on, a small forced voltage or current across it, and $R = \Delta V/I$ computed versus $V_{in}$; devices biased as in the circuit (gates at $V_{DD}$/0, bulks at ground/$V_{DD}$). +1: the right idea with a key detail missing (keeping the test signal small, or how R is extracted). 0: a transient-based method (step the input, extract the RC settling time at each level): it works but is not efficient. -2 (asserted as fact): a measurement with a large $V_{DS}$ (e.g., one switch terminal grounded and $V_{in}$ across the device), measuring with the switch off, or a claim that a single operating point gives the whole curve. Judge the method described: a slip in an illustrative netlist (e.g., MOS pins listed in the wrong order) when the prose clearly states the correct connections and procedure is a minor error (+1), not a misread circuit.
