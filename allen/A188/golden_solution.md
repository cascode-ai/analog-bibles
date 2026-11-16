# Golden Solution - A188

## Reference answer

Requirement: M1 and M2 must stay saturated, so $V_{DS1} = V_{BIAS} - V_{GS3} \ge V_{GS1} - V_{T}$, i.e. $V_{BIAS} \ge V_{GS3} + V_{DS1(sat)} = V_T + V_{ON3} + V_{ON1}$; it should not be much larger, so that M3/M4 stay saturated over the output swing. Because $V_{BIAS}$ is referred to the common source node, it tracks the input common-mode voltage.

One two-transistor implementation:
- An n-channel transistor M13, diode-connected (gate tied to drain), with its source connected to the common source node of M1–M2 and its gate/drain connected to the gates of M3 and M4.
- A p-channel current source M14 from $V_{DD}$ into the drain of M13, with its gate on the M12/M7/M8 bias line, so it carries a copy $I_{14}$ of the bias current.
- Size M13 so that $V_{GS13} = V_T + V_{ON3} + V_{ON1}$; with equal overdrives $V_{ON}$ and the same current as M3, this is $V_T + 2V_{ON}$, obtained with $(W/L)_{13} = \frac14(W/L)_3$ (scaled by $I_{14}/I_3$ for another current).
- Bookkeeping: $I_{14}$ flows into the common source node, so the tail device must sink $I_9 = I_7 + I_8 + I_{14}$ for the pair to keep its intended currents.

## Grading notes

+2: the condition $V_{BIAS} \ge V_{GS3} + V_{DS1(sat)}$ (≈ $V_T + 2V_{ON}$) and a workable implementation referred to the common source node with about two transistors (current-source-fed diode-connected device, suitably sized), with the effect of its bias current on the tail current noted. +1: workable implementation with the sizing condition but without the current bookkeeping, or a valid implementation referred to $V_{SS}$ (fixed gate bias) with a correct headroom argument. 0: only the condition, or a sketch whose bias current has no path. −2 (asserted as fact): $V_{BIAS}$ set below $V_{GS3}$ (cascodes off), a single diode with no current source claimed to work, or a design that forces M1/M2 into the triode region.
