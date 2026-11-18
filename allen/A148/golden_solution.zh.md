$V_{IC}(\max) \approx 2.28$ V，$V_{IC}(\min) \approx 1.31$ V，最坏情况 ICMR ≈ 0.98 V。

- $V_{IC}(\max) = V_{DD} - V_{SD5}(\mathrm{sat}) - V_{SG1}$。最坏（最低）情况：$V_{DD} = 4$ V，$|V_{TP}| = 0.85$ V，$K'_P = 45\ \mu\mathrm{A/V^2}$，M1 电流 50 µA：$V_{SG1} = 0.85 + \sqrt{2 \cdot 50\ \mu/(45\ \mu \cdot 5)} = 0.85 + 0.667 = 1.517$ V，因此 $V_{IC}(\max) = 4 - 0.2 - 1.517 = 2.283$ V。
- $V_{IC}(\min) = V_{SS} + V_{GS3} - |V_{TP1}|$。最坏（最高）情况：$V_{TN} = 0.85$ V，$K'_N = 99\ \mu\mathrm{A/V^2}$，$|V_{TP1}| = 0.55$ V：$V_{GS3} = 0.85 + \sqrt{2 \cdot 50\ \mu/(99\ \mu \cdot 1)} = 0.85 + 1.005 = 1.855$ V，因此 $V_{IC}(\min) = 1.855 - 0.55 = 1.305$ V。
- ICMR（最坏情况）= 2.283 − 1.305 = 0.978 V，比相同假设下 n 沟道输入结构的 0.71 V 更宽。作为参考，取标称值且 $V_{DD} = 5$ V 时，$V_{IC}(\max) = 3.47$ V，$V_{IC}(\min) = 0.95$ V。
