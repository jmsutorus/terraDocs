---
title: Importing Workouts
sidebar_position: 3
---

# Importing Workouts

If your workouts are already recorded somewhere else — on Strava or on a Garmin device — you don't have to re-enter them by hand. Cairnholm can import them with full detail: duration, distance, elevation, heart rate, and mile splits.

Both importers live under the **Import Workout** dropdown in the Exercise page header:

- **From Strava** — pick any activity from your connected Strava account
- **From file (Garmin)** — upload a `.tcx` or `.gpx` file exported from Garmin Connect

Imported workouts are saved as completed activities and count toward everything your manually logged workouts do: year-to-date stats, the training heatmap, Activity Trends, Best Efforts, Lift Records, and the Trophy Room.

## Importing from Strava

### Connecting your account

The first time you open the Strava importer, you'll be asked to connect. Tap **Connect Strava** and you'll be sent to Strava to authorize read access to your activities, then returned to the import page. This is a one-time step.

You can also connect or disconnect Strava at any time from the **Integrations** card in Settings.

:::note
Strava is an integration, not a sign-in method. Connecting it only grants Cairnholm permission to read your activity history — it doesn't change how you log in or affect your account.
:::

### Picking an activity

The import page lists your recent Strava activities with name, date, duration, distance, and average heart rate. Use **Load more activities** to page further back into your history.

To narrow a long list:

- **Filter chips** — chips appear for each activity type present in your loaded activities (Run, Cycling, Swimming, Strength, etc.). Tap one to show only that type.
- **Sort** — order by newest, oldest, longest, or shortest.

Activities you've already imported show an **Imported** badge and can't be selected again, so you'll never create a duplicate.

### Reviewing and saving

Selecting an activity opens a review screen pre-filled from Strava:

- **Stat cards** — duration, distance, elevation gain, and average heart rate
- **Date and start time** — taken from the activity's local wall-clock time
- **Mile splits** — when available, a table of split time, distance, and average heart rate per mile; splits are saved as individual exercise entries on the workout

Before saving you can adjust:

- **Activity type** — Cairnholm suggests one based on Strava's sport classification, but you can change it
- **Intensity** — Easy, Moderate, Hard, or Very Hard (defaults to Moderate)
- **Notes** — pre-filled with the activity's Strava name; edit freely

Tap **Save Workout** and the activity lands in your archive as a completed workout.

### Duplicate protection

Cairnholm remembers which Strava activities you've imported. If a save would create a duplicate, it's blocked and you'll see a message instead — even across devices or sessions.

## Importing from a Garmin file

Choose **From file (Garmin)** and upload an export from Garmin Connect:

- **`.tcx`** — recommended; includes full lap splits
- **`.gpx`** — GPS track data

You'll get the same review screen as the Strava flow — stats, date and time, splits, and editable type, intensity, and notes — before saving.

## Tips

- **Backfill your history** — the Strava importer can page back as far as your history goes, so you can pull in past months of training one activity at a time.
- **Imported records count** — if an imported activity is your longest run or fastest pace, your Trophy Room and Best Efforts update automatically.
- **Use the notes field** — the Strava activity name is a starting point; add how the session actually felt while you still remember.
