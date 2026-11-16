# Golden Solution - G389

## Reference answer

About 20 V/μs: when $V_{cmc}$ drives $M_5$ off, each output is charged by 100 μA into 5 pF, so $dV_{oc}/dt = 100\ \mu\text{A}/5\ \text{pF} = 20$ V/μs (both outputs rise together, $V_{od}$ unchanged).

- A CM change requires the tail current to differ from $|I_{D3}| + |I_{D4}| = 200\ \mu$A; the difference splits equally between the two output capacitors.
- The largest available imbalance in the rising direction is the full load current: tail current zero, 100 μA per output → +20 V/μs.
- In the falling direction the rate is $(I_{D5,\max} - 200\ \mu\text{A})/(2 \times 5\ \text{pF})$. It is set by how far $V_{cmc}$ can raise the tail current above its nominal value (e.g. 20 V/μs if the tail current can reach 400 μA), not by the given bias.

## Grading notes

+2: 20 V/μs for the CM slew rate, explained by $M_5$ turning off and each load current (100 μA) charging its own 5 pF. A remark on the falling direction is welcome but not required. +1: 20 V/μs with a weak explanation. 0: correct mechanism with a slip (e.g. 200 μA into 10 pF in parallel stated as 40 V/μs and then corrected). −2 (asserted as fact): 40 V/μs (DM result reused), 10 V/μs (current split wrongly between series capacitors), or the claim that the CM output cannot slew.
