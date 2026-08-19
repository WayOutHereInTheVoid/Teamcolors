1. **Add `Grid` Icon**: Ensure `Grid` icon from lucide is available for the new tab.
2. **Define `calculateColorDistance`**: Implement the weighted HSB distance formula as a pure function.
3. **Determine Primary Color**: Create logic to get a team's primary color (`dominant` role or first color).
4. **State Management**:
   - Add `'matrix'` to `activeTab` states.
   - Add `matrixSortOrder` state (`'alphabetical'`, `'hue'`).
5. **New Tab Button**: Add the "Conflict Matrix" tab to the navigation.
6. **Conflict Matrix View**:
   - Create the view when `activeTab === 'matrix'`.
   - Calculate primary colors for all teams.
   - Sort teams based on `matrixSortOrder`.
   - Calculate conflict matrix scores for all team pairs.
   - Count the number of conflicts (distance < 20) avoiding double counting (using a unique pair list).
   - Render the summary bar.
   - Render the sorting controls.
   - Render the N×N grid:
     - Determine abbreviations for team names (up to 3 characters).
     - Map severity scores to background colors (`bg-red-500/70`, `bg-amber-400/50`, `bg-yellow-300/20`, `bg-slate-800`).
     - Render diagonal as `bg-slate-700` with an indicator.
     - Add hover tooltips displaying the score, label, and mini swatches.
   - Render the Conflict Pair List below the grid, sorted by severity ascending. Include "Review" button to open the team modal.
7. **Pre-commit**: Verify the new UI functions correctly, runs tests, and completes pre-commit checks.
8. **Submit**: Submit the changes.
