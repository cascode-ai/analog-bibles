$A_v \approx 104$ V/V，$R_{out} \approx 2.22$ MΩ，$V_{IC}(\min) \approx 1.215$ V，$V_{IC}(\max) = V_{DD} - 0.316$ V，$V_{DD} = 5$ V 时 ≈ 4.68 V。

- $g_{m1} = \sqrt{K'_N I_{SS}(W_1/L_1)} = \sqrt{110\ \mu \cdot 10\ \mu \cdot 2} = 46.9\ \mu$S。$g_{ds2} + g_{ds4} = 0.09 \cdot 5\ \mu = 0.45\ \mu$S，故 $R_{out} = 2.22$ MΩ，$A_v = 46.9/0.45 = 104$。
- $V_{IC}(\max) = V_{DD} - V_{SG3} + V_{TN1}$，其中 $V_{SG3} = 0.7 + \sqrt{2 \cdot 5\ \mu/(50\ \mu \cdot 2)} = 1.016$ V，得 $V_{DD} - 0.316$ V。
- $V_{IC}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = \sqrt{2 \cdot 10\ \mu/(110\ \mu \cdot 2)} + 0.7 + \sqrt{2 \cdot 5\ \mu/(110\ \mu \cdot 2)} = 0.302 + 0.913 = 1.215$ V。
